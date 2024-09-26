-- CreateEnum
CREATE TYPE "CommonState" AS ENUM ('Init', 'Pending', 'Done', 'Fail');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('GroupJoin', 'ChannelJoin', 'MiniAppOpen', 'TwitterFollow', 'TwitterReply', 'TwitterLike', 'TwitterRepost', 'WebsiteOpen', 'DiscordJoin', 'WalletConnect');

-- CreateEnum
CREATE TYPE "LoginType" AS ENUM ('TgAuth', 'MiniApp');

-- CreateEnum
CREATE TYPE "Blockchain" AS ENUM ('TON', 'SOL', 'ETH');

-- CreateEnum
CREATE TYPE "Network" AS ENUM ('Mainnet', 'Testnet', 'Custom');

-- CreateEnum
CREATE TYPE "ChatStatus" AS ENUM ('creator', 'member', 'administrator', 'restricted', 'left', 'kicked');

-- CreateEnum
CREATE TYPE "ImageScenario" AS ENUM ('Project', 'Gem', 'Matcher', 'Newsletter', 'Service', 'Tool', 'Other');

-- CreateEnum
CREATE TYPE "ImageService" AS ENUM ('Local', 'AwsS3', 'AliyunOSS', 'CloudflareImage');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "loginType" "LoginType" NOT NULL,
    "tgId" BIGINT NOT NULL,
    "tgUsername" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "profileImg" TEXT,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "refCode" TEXT NOT NULL,
    "referBy" BIGINT,
    "langCode" TEXT,
    "totalPoints" BIGINT NOT NULL DEFAULT 0,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAction" (
    "id" BIGSERIAL NOT NULL,
    "opTgId" BIGINT NOT NULL,
    "opDisplayName" TEXT,
    "actionType" TEXT NOT NULL,
    "selfReward" BIGINT,
    "targetTgId" BIGINT,
    "targetReward" BIGINT,
    "targetDisplayName" TEXT,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "UserAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletInfo" (
    "id" BIGSERIAL NOT NULL,
    "tgId" BIGINT NOT NULL,
    "chain" "Blockchain" NOT NULL,
    "network" "Network" NOT NULL,
    "address" TEXT NOT NULL,
    "balance" BIGINT,
    "loginDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "WalletInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 100,
    "isSuperCategory" BOOLEAN NOT NULL DEFAULT false,
    "superCatagory" TEXT,
    "appsCount" INTEGER NOT NULL DEFAULT 0,
    "iconImg" TEXT,
    "imgService" "ImageService" DEFAULT 'AliyunOSS',
    "extJson" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "ownerTgId" BIGINT NOT NULL,
    "name" TEXT,
    "tagline" TEXT,
    "description" TEXT,
    "langCodes" TEXT,
    "specialty" TEXT,
    "website" TEXT,
    "twitters" JSONB,
    "tgChannels" JSONB,
    "tgChats" JSONB,
    "tgBots" JSONB,
    "iconImg" JSONB,
    "upvote" INTEGER NOT NULL DEFAULT 1,
    "rating" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 100,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "promoted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnProjects" (
    "projectId" BIGINT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "createBy" TEXT NOT NULL,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnProjects_pkey" PRIMARY KEY ("projectId","categoryId")
);

-- CreateTable
CREATE TABLE "ProjectVote" (
    "id" BIGSERIAL NOT NULL,
    "projectId" BIGINT NOT NULL,
    "voteBy" BIGINT NOT NULL,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" BIGSERIAL NOT NULL,
    "scenario" "ImageScenario" NOT NULL,
    "bindId" BIGINT,
    "service" "ImageService" NOT NULL DEFAULT 'AliyunOSS',
    "url" TEXT NOT NULL,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tgId_key" ON "User"("tgId");

-- CreateIndex
CREATE UNIQUE INDEX "User_refCode_key" ON "User"("refCode");

-- CreateIndex
CREATE INDEX "UserAction_opTgId_idx" ON "UserAction"("opTgId");

-- CreateIndex
CREATE UNIQUE INDEX "WalletInfo_address_key" ON "WalletInfo"("address");

-- CreateIndex
CREATE INDEX "WalletInfo_address_idx" ON "WalletInfo"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "CategoriesOnProjects_categoryId_idx" ON "CategoriesOnProjects"("categoryId");

-- CreateIndex
CREATE INDEX "ProjectVote_projectId_idx" ON "ProjectVote"("projectId");

-- CreateIndex
CREATE INDEX "ProjectVote_voteBy_idx" ON "ProjectVote"("voteBy");

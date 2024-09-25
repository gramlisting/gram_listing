-- CreateEnum
CREATE TYPE "WalletMode" AS ENUM ('PlatformCustody', 'UserOwnWallet');

-- CreateEnum
CREATE TYPE "Blockchain" AS ENUM ('TON', 'SOL', 'ETH');

-- CreateEnum
CREATE TYPE "Network" AS ENUM ('Mainnet', 'Testnet', 'Custom');

-- CreateEnum
CREATE TYPE "ChatStatus" AS ENUM ('creator', 'member', 'administrator', 'restricted', 'left', 'kicked');

-- CreateEnum
CREATE TYPE "CoinStatus" AS ENUM ('Init', 'Processing', 'Deploying', 'Deployed', 'FailedToDeploy', 'DexListing', 'FailedToListing', 'DexListed');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "tgId" BIGINT NOT NULL,
    "tgUsername" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "profileImg" TEXT,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "refCode" TEXT NOT NULL,
    "referBy" BIGINT,
    "langCode" TEXT,
    "walletMode" "WalletMode",
    "walletChain" "Blockchain",
    "walletNetwork" "Network",
    "walletAddress" TEXT,
    "walletBalance" BIGINT,
    "totalPoints" BIGINT NOT NULL DEFAULT 0,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

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
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" BIGSERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "chain" "Blockchain" NOT NULL,
    "network" "Network" NOT NULL,
    "address" TEXT NOT NULL,
    "balance" BIGINT,
    "pk" TEXT,
    "phrases" TEXT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletOrder" (
    "id" BIGSERIAL NOT NULL,
    "orderType" TEXT NOT NULL,
    "walletId" BIGINT NOT NULL,
    "opAmount" BIGINT,
    "opTgId" BIGINT,
    "txHash" TEXT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WalletOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" BIGSERIAL NOT NULL,
    "groupId" BIGINT NOT NULL,
    "inviterTgId" BIGINT NOT NULL,
    "groupType" TEXT NOT NULL,
    "groupTitle" TEXT NOT NULL,
    "groupUsername" TEXT,
    "langCode" TEXT,
    "memberCount" BIGINT,
    "mainBotId" BIGINT NOT NULL,
    "mainBotUsername" TEXT NOT NULL,
    "botStatus" "ChatStatus" NOT NULL,
    "mainMemecoinId" BIGINT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Memecoin" (
    "id" BIGSERIAL NOT NULL,
    "chain" "Blockchain" NOT NULL,
    "network" "Network" NOT NULL,
    "name" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageType" TEXT,
    "image" TEXT,
    "devTgId" BIGINT,
    "coinStatus" "CoinStatus" NOT NULL,
    "contractVersion" TEXT,
    "deployTxHash" TEXT,
    "masterAddress" TEXT,
    "devWalletAddress" TEXT,
    "opWalletAddress" TEXT,
    "opDeploySeqNo" BIGINT,
    "socialJson" JSONB,
    "dexJson" JSONB,
    "groupId" BIGINT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Memecoin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuyOrder" (
    "id" BIGSERIAL NOT NULL,
    "buyerTgId" BIGINT NOT NULL,
    "memecoinId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "buyAmt" BIGINT,
    "fromCoin" TEXT,
    "fromAmt" BIGINT,
    "txHash" TEXT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuyOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellOrder" (
    "id" BIGSERIAL NOT NULL,
    "sellerTgId" BIGINT NOT NULL,
    "memecoinId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sellMode" TEXT,
    "sellPercent" BIGINT,
    "sellAmt" BIGINT,
    "toCoin" TEXT,
    "toAmt" BIGINT,
    "txHash" TEXT,
    "extJson" JSONB,
    "traceId" TEXT,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SellOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tgId_key" ON "User"("tgId");

-- CreateIndex
CREATE UNIQUE INDEX "User_refCode_key" ON "User"("refCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserAction_modifyDt_key" ON "UserAction"("modifyDt");

-- CreateIndex
CREATE INDEX "UserAction_opTgId_idx" ON "UserAction"("opTgId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_address_key" ON "Wallet"("address");

-- CreateIndex
CREATE INDEX "Wallet_address_idx" ON "Wallet"("address");

-- CreateIndex
CREATE INDEX "WalletOrder_walletId_idx" ON "WalletOrder"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupId_key" ON "Group"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "Group_mainMemecoinId_key" ON "Group"("mainMemecoinId");

-- CreateIndex
CREATE INDEX "Group_inviterTgId_idx" ON "Group"("inviterTgId");

-- CreateIndex
CREATE INDEX "Memecoin_ticker_idx" ON "Memecoin"("ticker");

-- CreateIndex
CREATE INDEX "Memecoin_devTgId_ticker_idx" ON "Memecoin"("devTgId", "ticker");

-- CreateIndex
CREATE INDEX "Memecoin_createDt_idx" ON "Memecoin"("createDt");

-- CreateIndex
CREATE INDEX "Memecoin_modifyDt_idx" ON "Memecoin"("modifyDt");

-- CreateIndex
CREATE INDEX "BuyOrder_memecoinId_idx" ON "BuyOrder"("memecoinId");

-- CreateIndex
CREATE INDEX "SellOrder_memecoinId_idx" ON "SellOrder"("memecoinId");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_mainMemecoinId_fkey" FOREIGN KEY ("mainMemecoinId") REFERENCES "Memecoin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

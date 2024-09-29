/*
  Warnings:

  - You are about to drop the column `imgService` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `isSuperCategory` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `superCatagory` on the `Category` table. All the data in the column will be lost.
  - The `iconImg` column on the `Category` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `service` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `ProjectUserHistory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedDateKey` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "imgService",
DROP COLUMN "isSuperCategory",
DROP COLUMN "superCatagory",
DROP COLUMN "iconImg",
ADD COLUMN     "iconImg" JSONB;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "service";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "cloutIndex" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "updatedDateKey" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProjectUserHistory";

-- DropEnum
DROP TYPE "ImageService";

-- CreateTable
CREATE TABLE "ParticipantHistory" (
    "id" BIGSERIAL NOT NULL,
    "projectId" BIGINT NOT NULL,
    "targetKey" TEXT NOT NULL,
    "updatedDateKey" TEXT NOT NULL,
    "participantCount" INTEGER NOT NULL DEFAULT 1,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "ParticipantHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CloutIndex" (
    "id" BIGSERIAL NOT NULL,
    "projectId" BIGINT NOT NULL,
    "updatedDateKey" TEXT NOT NULL,
    "userActivity" INTEGER NOT NULL,
    "influence" INTEGER NOT NULL,
    "community" INTEGER NOT NULL,
    "innovation" INTEGER NOT NULL,
    "Technical" INTEGER NOT NULL,
    "Market" INTEGER NOT NULL,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifyBy" BIGINT,
    "modifyDt" TIMESTAMP(3),

    CONSTRAINT "CloutIndex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantHistory_projectId_targetKey_updatedDateKey_key" ON "ParticipantHistory"("projectId", "targetKey", "updatedDateKey");

-- CreateIndex
CREATE INDEX "CloutIndex_projectId_idx" ON "CloutIndex"("projectId");

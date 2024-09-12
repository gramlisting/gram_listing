/*
  Warnings:

  - You are about to drop the column `starLv` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "starLv",
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "rating" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

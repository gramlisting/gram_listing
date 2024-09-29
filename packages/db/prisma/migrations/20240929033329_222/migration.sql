/*
  Warnings:

  - You are about to drop the column `twitters` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "twitters",
ADD COLUMN     "socialMedias" JSONB;

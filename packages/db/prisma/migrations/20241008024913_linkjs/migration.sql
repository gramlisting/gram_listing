/*
  Warnings:

  - You are about to drop the column `socialMedias` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "socialMedias",
DROP COLUMN "website",
ADD COLUMN     "links" JSONB;

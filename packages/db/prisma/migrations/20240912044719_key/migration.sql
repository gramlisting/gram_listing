/*
  Warnings:

  - You are about to drop the column `isSuper` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "isSuper",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "iconImg" TEXT,
ADD COLUMN     "imgService" "ImageService" DEFAULT 'AliyunOSS',
ADD COLUMN     "isSuperCategory" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Gem" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "service" SET DEFAULT 'AliyunOSS';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "imgService" DROP NOT NULL,
ALTER COLUMN "imgService" SET DEFAULT 'AliyunOSS';

-- CreateIndex
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");

/*
  Warnings:

  - You are about to drop the column `servcie` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imgServcie` on the `Project` table. All the data in the column will be lost.
  - Added the required column `service` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgService` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "servcie",
ADD COLUMN     "service" "ImageService" NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "imgServcie",
ADD COLUMN     "imgService" "ImageService" NOT NULL;

-- DropEnum
DROP TYPE "CoinStatus";

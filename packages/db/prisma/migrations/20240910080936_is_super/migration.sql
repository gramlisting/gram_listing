-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isSuper" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "specialty" TEXT;

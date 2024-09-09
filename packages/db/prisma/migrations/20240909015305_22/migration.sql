-- DropIndex
DROP INDEX "UserAction_modifyDt_key";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Gem" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserAction" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "WalletInfo" ALTER COLUMN "modifyDt" DROP NOT NULL;

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Draft', 'Submited', 'Pending', 'Online', 'Deleted');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'Draft';

-- DropEnum
DROP TYPE "CommonState";

-- CreateTable
CREATE TABLE "ProjectUserHistory" (
    "id" BIGSERIAL NOT NULL,
    "projectId" BIGINT NOT NULL,
    "entityId" TEXT NOT NULL,
    "dateIndex" TEXT NOT NULL,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectUserHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectUserHistory_projectId_entityId_dateIndex_key" ON "ProjectUserHistory"("projectId", "entityId", "dateIndex");

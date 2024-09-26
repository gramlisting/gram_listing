-- CreateTable
CREATE TABLE "NotcoinGoodTable" (
    "id" BIGSERIAL NOT NULL,
    "projectId" BIGINT NOT NULL,
    "entityId" TEXT NOT NULL,
    "dateIndex" TEXT NOT NULL,
    "extJson" JSONB,
    "createBy" BIGINT,
    "createDt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotcoinGoodTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NotcoinGoodTable_projectId_entityId_dateIndex_key" ON "NotcoinGoodTable"("projectId", "entityId", "dateIndex");

/*
  Warnings:

  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderStatusId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderTypeId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "orderStatusId" INTEGER NOT NULL,
ADD COLUMN     "orderTypeId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "OrderStatus";

-- CreateTable
CREATE TABLE "OrderStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OrderStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OrderType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderStatus_name_key" ON "OrderStatus"("name");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderStatusId_fkey" FOREIGN KEY ("orderStatusId") REFERENCES "OrderStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderTypeId_fkey" FOREIGN KEY ("orderTypeId") REFERENCES "OrderType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

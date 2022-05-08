/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductType_name_key" ON "ProductType"("name");

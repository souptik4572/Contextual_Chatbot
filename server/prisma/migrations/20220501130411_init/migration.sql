-- CreateEnum
CREATE TYPE "AdminType" AS ENUM ('ADMIN', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AdminType" NOT NULL DEFAULT E'ADMIN',

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Faq" ADD COLUMN     "parentFaqId" INTEGER;

-- AddForeignKey
ALTER TABLE "Faq" ADD CONSTRAINT "Faq_parentFaqId_fkey" FOREIGN KEY ("parentFaqId") REFERENCES "Faq"("id") ON DELETE SET NULL ON UPDATE CASCADE;

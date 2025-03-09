-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "studentName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "student_id_key" ON "student"("id");

-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("emailAddress")
);

-- CreateTable
CREATE TABLE "Complain" (
    "complainId" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "typeOfCategory" TEXT NOT NULL,
    "typeOfComplain" TEXT NOT NULL,
    "image" TEXT,
    "witnesses" TEXT,
    "affectedAreaSize" TEXT,
    "isItOngoing" BOOLEAN NOT NULL,
    "departmentInvolved" TEXT,
    "personsInvolved" TEXT,
    "stCurrentlyDangerous" BOOLEAN NOT NULL,
    "facilityType" TEXT,
    "nameOfFacility" TEXT,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Complain_pkey" PRIMARY KEY ("complainId")
);

-- AddForeignKey
ALTER TABLE "Complain" ADD CONSTRAINT "Complain_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("emailAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

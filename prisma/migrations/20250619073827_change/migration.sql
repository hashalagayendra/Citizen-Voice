/*
  Warnings:

  - You are about to drop the column `affectedAreaSize` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `departmentInvolved` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `facilityType` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `isItOngoing` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `nameOfFacility` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `personsInvolved` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `stCurrentlyDangerous` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfCategory` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfComplain` on the `Complain` table. All the data in the column will be lost.
  - You are about to drop the column `witnesses` on the `Complain` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Complain" DROP COLUMN "affectedAreaSize",
DROP COLUMN "departmentInvolved",
DROP COLUMN "facilityType",
DROP COLUMN "image",
DROP COLUMN "isItOngoing",
DROP COLUMN "location",
DROP COLUMN "nameOfFacility",
DROP COLUMN "personsInvolved",
DROP COLUMN "stCurrentlyDangerous",
DROP COLUMN "typeOfCategory",
DROP COLUMN "typeOfComplain",
DROP COLUMN "witnesses",
ADD COLUMN     "Affected_Area" INTEGER,
ADD COLUMN     "Any_Witnesses" TEXT,
ADD COLUMN     "ConstructionType" BOOLEAN,
ADD COLUMN     "Departments" TEXT,
ADD COLUMN     "FacilityType" TEXT,
ADD COLUMN     "Is_It_Dangerous" TEXT,
ADD COLUMN     "Is_It_Ongoing" TEXT,
ADD COLUMN     "NameOfFacility" TEXT,
ADD COLUMN     "Person_involved" TEXT,
ADD COLUMN     "Severity_Level" TEXT,
ADD COLUMN     "Submission_Method" TEXT,
ADD COLUMN     "location_coordinates" JSONB,
ADD COLUMN     "tempory_address" TEXT,
ADD COLUMN     "uploadedImageUrls" TEXT[];

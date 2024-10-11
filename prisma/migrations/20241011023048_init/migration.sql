-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `lastPasswordChange` DATETIME(3) NULL,
    `insDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updDate` DATETIME(3) NOT NULL,
    `insUser` INTEGER NULL,
    `updUser` INTEGER NULL,
    `type` VARCHAR(191) NOT NULL,
    `passwordValidity` INTEGER NULL,
    `passwordExpires` DATETIME(3) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `AppUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ean` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `idCategory` INTEGER NOT NULL,
    `insDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updDate` DATETIME(3) NOT NULL,
    `insUser` INTEGER NULL,
    `updUser` INTEGER NULL,

    UNIQUE INDEX `Product_ean_key`(`ean`),
    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_idCategory_fkey` FOREIGN KEY (`idCategory`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_insUser_fkey` FOREIGN KEY (`insUser`) REFERENCES `AppUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_updUser_fkey` FOREIGN KEY (`updUser`) REFERENCES `AppUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

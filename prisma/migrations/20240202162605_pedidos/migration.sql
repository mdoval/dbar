/*
  Warnings:

  - You are about to drop the column `estado` on the `pedido` table. All the data in the column will be lost.
  - Added the required column `activo` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Pedido_empresaId_fkey` ON `pedido`;

-- DropIndex
DROP INDEX `Pedido_puntoId_fkey` ON `pedido`;

-- DropIndex
DROP INDEX `PedidoItem_pedidoId_fkey` ON `pedidoitem`;

-- DropIndex
DROP INDEX `PedidoItem_productoId_fkey` ON `pedidoitem`;

-- DropIndex
DROP INDEX `Producto_empresaId_fkey` ON `producto`;

-- DropIndex
DROP INDEX `Punto_empresaId_fkey` ON `punto`;

-- DropIndex
DROP INDEX `Usuario_empresaId_fkey` ON `usuario`;

-- AlterTable
ALTER TABLE `pedido` DROP COLUMN `estado`,
    ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Punto` ADD CONSTRAINT `Punto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_puntoId_fkey` FOREIGN KEY (`puntoId`) REFERENCES `Punto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoItem` ADD CONSTRAINT `PedidoItem_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoItem` ADD CONSTRAINT `PedidoItem_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

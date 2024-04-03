import mcpi.minecraft as minecraft
import mcpi.block as block

# Se connecter au serveur Minecraft
mc = minecraft.Minecraft.create()

# Coordonnées pour placer le bloc (x, y, z)
x, y, z = 0, 0, 0

# Type de bloc à placer
block_type = block.STONE

# Placer le bloc dans le monde
mc.setBlock(x, y, z, block_type)

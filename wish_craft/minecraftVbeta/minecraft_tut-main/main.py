from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController
from perlin_noise import PerlinNoise
import random


noise = PerlinNoise(octaves=3, seed=random.randint(1, 1000))

app = Ursina()

selected_block = "grass"

player = FirstPersonController(
  mouse_sensitivity=Vec2(100, 100),
  position=(0, 5, 0)
  )

block_textures = {
    "grass": load_texture("assets/textures/groundEarth.png"),
    "dirt": load_texture("assets/textures/groundMud.png"),
    "stone": load_texture("assets/textures/wallStone.png"),
    "bedrock": load_texture("assets/textures/stone07.png"),
    "woods": load_texture("assets/textures/woods02.png"),
    "ground": load_texture("assets/textures/ground.png"),
    "groundCheckered": load_texture("assets/textures/groundCheckered.png"),
    "stone06": load_texture("assets/textures/stone06.png"),
    "stone07": load_texture("assets/textures/stone07.png"),
    "wallBrick01": load_texture("assets/textures/wallBrick01.png"),
    "wallBrick02": load_texture("assets/textures/wallBrick02.png"),
    "wallBrick03": load_texture("assets/textures/wallBrick03.png"),
    "wallBrick04": load_texture("assets/textures/wallBrick04.png"),
    "wallBrick05": load_texture("assets/textures/wallBrick05.png"),
    "wallBrick06": load_texture("assets/textures/wallBrick06.png"),
    "groundMud": load_texture("assets/textures/groundMud.png"),
    "groundSnow": load_texture("assets/textures/groundSnow.png"),
    "ice01": load_texture("assets/textures/ice01.png"),
    "lava01": load_texture("assets/textures/lava01.png"),
    "snow": load_texture("assets/textures/snow.png"),
    "Stone01": load_texture("assets/textures/Stone01.png"),
    "Stone02": load_texture("assets/textures/Stone02.png"),
    "Stone03": load_texture("assets/textures/Stone03.png"),
    "Stone04": load_texture("assets/textures/Stone04.png"),
    "Stone05": load_texture("assets/textures/Stone05.png"),
    "water": load_texture("assets/textures/water.png"),
}

class Block(Entity):
  def __init__(self, position, block_type):
    super().__init__(
      position=position,
      model="assets/models/block_model",
      scale=1,
      origin_y=-0.5,
      texture=block_textures.get(block_type),
      collider="box"
      )
    self.block_type = block_type

mini_block = Entity(
  parent=camera,
  model="assets/models/block_model",
  scale=0.2,
  texture=block_textures.get(selected_block),
  position=(0.35, -0.25, 0.5),
  rotation=(-15, -30, -5)
  )

min_height = -5
for x in range(-10, 10):
  for z in range(-10, 10):
    height = noise([x * 0.02, z * 0.02])
    height = math.floor(height * 7.5)
    for y in range(height, min_height - 1, -1):
      if y == min_height:
        block = Block((x, y + min_height, z), "bedrock")
      elif y == height:
        block = Block((x, y + min_height, z), "ground")
      elif height - y > 2:
        block = Block((x, y + min_height, z), "groundCheckered")
      else:
        block = Block((x, y + min_height, z), "lava01")




def input(key):
    global selected_block
    block_types = list(block_textures.keys())  
    current_index = block_types.index(selected_block)  
    if key == "escape":
        app.quit()

    if key == "left mouse down":
        hit_info = raycast(camera.world_position, camera.forward, distance=10)
        if hit_info.hit:
            block = Block(hit_info.entity.position + hit_info.normal, selected_block)
    if key == "right mouse down" and mouse.hovered_entity:
        if not mouse.hovered_entity.block_type == "bedrock":
            destroy(mouse.hovered_entity)
    if key == "t":
      spawn_mob()
    if key == "scroll up":
        current_index = (current_index - 1) % len(block_types)  # Décrémente l'index et boucle
    elif key == "scroll down":
        current_index = (current_index + 1) % len(block_types)  # Incrémente l'index et boucle
 
    selected_block = block_types[current_index]  # Met à jour le bloc sélectionné
 

def spawn_mob():
    mob = FrameAnimation3d('panda_walk_', fps=1)
    mob.texture = 'models_compressed/panda_texture'
    spawn_position = player.position
    mob.position = spawn_position
    mob.turnSpeed = 1
    mob.speed = 10
    print("panda")
    return mob

app = Ursina()

def update():
  mini_block.texture=block_textures.get(selected_block)

app.run()



// Register the new Skkibdi block with a custom category (not land)
const SkkibdiBlock = new Block({
  name: "skkibdi",  // Name of the block
  texture: "sandbloxel_texture", // Placeholder for texture (replace with actual texture)
  hardness: 1000000, // Extremely strong, like diamond
  color: "#00FFFF", // Light cyan, similar to diamond powder
  description: "A block as strong as diamond but looks like powder!",
  
  // Not categorized as 'land' (use a custom category or behavior)
  category: "Land",  // Use a custom category instead of land 
  
  // Override the onTick method to simulate heat resistance
  onTick: function (x, y, z) {
    const block = getBlock(x, y, z);
    
    // Prevent this block from burning unless temperature exceeds a high threshold
    const temperature = getTemperature(x, y, z); // Retrieve current temperature of block
    
    if (temperature >= 1000000) {
      // Allow burning only when temperature is very high (e.g., above 1,000,000)
      if (Math.random() < 0.1) {  // Small chance to "burn" or disappear
        removeBlock(x, y, z); // Simulate burning (remove block)
      }
    }
  },
  
  // Optionally handle interactions with players (e.g., explosion or powder effect)
  onInteract: function (player, x, y, z) {
    // Simulate a "powder explosion" or some effect when the player touches it
    createParticleEffect(x, y, z, "explosion"); // Custom particle effect for powder
  }
});

// Register the Skkibdi block to the game
registerBlock(SkkibdiBlock);

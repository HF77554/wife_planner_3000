const bcrypt = require('bcrypt')

module.exports = async (preEncryption) => {
    try {
      const hashedPassword = await bcrypt.hash(preEncryption, 10)
      return hashedPassword

    } catch (error) {
      console.error("Failed to generate encryption", error);
      throw error;
    }
  }
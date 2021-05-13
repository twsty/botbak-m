const Discord = require('discord.js');

exports.run = async (client, message) => {
        let bakim = new Discord.MessageEmbed()
        .setTitle("Wexy İsimli Bot Bakıma Girmiştir")
        .setDescription(`Botumuzun Sunucu Ve Kullanıcı Sayı Fazla Olduğundan Kullandığım 
        Danbot, Sweplox Gibi Hostingler Botu Kaldırmıyor.
        Botumuza Sponsor Arıyoruz!!
        Botumuza Sponsor Olmak İçin !sponsor <mesajınız> Komutunu Kullana Bilirsiniz.
        `)
      message.channel.send(bakim)
  };
  
  exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "bakımbilgi",
    description: "",
    usage: "",

  };
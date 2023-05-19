exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Neoxr Network',
         website: 'https://youtube.com/@itsukabotz',
         email: 'itsukabotz.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}
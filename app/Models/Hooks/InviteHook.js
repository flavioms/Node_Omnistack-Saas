'use strict'

const User = use('App/Models/User')
const InviteHook = (exports = module.exports = {})

InviteHook.sendInvitationEmail = async invite => {
  const { email } = invite
  const invited = await User.findBy('email', email)

  if (invite) {
    await invite.teams().attach(invite.team_id)
  } else {
    console.log('Criar Conta')
    // Envio de email
  }
}

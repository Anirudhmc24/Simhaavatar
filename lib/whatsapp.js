// ============================================================
// SIMHAAVATAR — WhatsApp Deep Link Helper
// Replace PHONE_NUMBER with your actual WhatsApp business number
// ============================================================

const PHONE_NUMBER = '919999999999' // Format: country code + number, no +

export function buildWhatsAppLink(name, eventType, looks = []) {
  const looksStr = looks.length > 0 ? looks.join(', ') : 'a look'
  const msg = `Hi Simhaavatar! I'm ${name}, interested in renting jewellery for ${eventType || 'an event'}. Looking at: ${looksStr}.`
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function openWhatsApp(name, eventType, looks) {
  window.open(buildWhatsAppLink(name, eventType, looks), '_blank')
}

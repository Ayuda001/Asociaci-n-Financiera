// /api/submit-form.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, email, telephone, montant, duree } = req.body;
    // Traiter les données ici (par exemple, les sauvegarder dans une base de données)
    res.status(200).json({ success: true, message: 'Formulaire soumis avec succès !' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Méthode ${req.method} non autorisée` });
  }
}

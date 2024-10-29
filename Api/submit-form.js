module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { nom, email, telephone, montant, duree } = req.body;
    // Traitement des données
    res.status(200).json({ success: true, message: 'Formulaire soumis avec succès !' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
};

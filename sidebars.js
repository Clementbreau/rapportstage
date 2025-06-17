module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Accueil'
    },
    {
      type: 'category',
      label: 'Projets & expériences',
      items: [
        {
          type: 'category',
          label: 'Stage chez Covéa',
          items: [
            'projets/stagecovea/entreprise',
            'projets/stagecovea/mission1',
            'projets/stagecovea/mission2'
          ]
        },
        'projets/projetlogbase',
        'projets/saecapteurs'
      ]
    },
    {
      type: 'category',
      label: 'Compétences',
      items: [
        'competences/competence1',
        'competences/competence2',
        'competences/competence3',
        'competences/competence4',
        'competences/competence5',
        'competences/competence6'
      ]
    },
    {
      type: 'doc',
      id: 'bilan',
      label: 'Bilan personnel'
    }
    
  ]
};

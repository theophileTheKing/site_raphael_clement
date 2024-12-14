<script>
  import { Li, List, P, Heading } from 'flowbite-svelte';

</script>

<div class="bg-bg_light-50 dark:bg-bg_dark-50 pt-16 flex flex-col">

  <div class="flex py-12 sm:py-20 justify-center">
    <h1 class="text-4xl sm:text-5xl text-center px-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Atelier informatique 9e classe</h1>
  </div>
  <div class="flex flex-col p-5">
    <P class="mb-3" weight="normal" color="text-black dark:text-white">
      Le mot « informatique » est né en 1962 dans la langue française, il vient de la contraction du terme « information » et « automatique ». L’informatique désigne donc l’automatisation du traitement de l’information, par l’intermédiaire de machines baptisées ordinateurs.
    </P>
    <P class="mb-3" weight="normal" color="text-black dark:text-white">
      Les premiers ordinateurs, plutôt baptisés calculateurs sont à l’origine des machines volumineuses destinées à effectuer des calculs mathématiques à grande vitesse. Peu de temps après la seconde guerre mondiale, on améliore ces calculateurs afin d’en faire des calculateurs programmables, c’est à dire capables d’exécuter une grande diversité de programmes, de façon plus générale capables de traiter de l’information.
    </P>
    <P class="mb-3" weight="normal" color="text-black dark:text-white">
      En 1955 l’entreprise IBM commercialise le premier ordinateur produit en masse et destiné au grand public : l’IBM 650. Nous sommes encore bien loin des machines actuelles, mais le développement de l’informatique grand public, conjointement aux progrès dans le domaine de la miniaturisation électronique, est lancé. Aujourd'hui les ordinateurs sont partout, bien au-delà de l’ordinateur portable ou l’ordinateur fixe de bureau : 
    </P>
    
    <List tag="ul" class="space-y-1 mb-3 text-black dark:text-white">
      <Li>les smartphones actuels sont par exemple de véritables ordinateurs</Li>
      <Li>les ordinateurs de bords équipent par exemple les voitures modernes</Li>
      <Li>etc...</Li>
    </List>
  
    <P class="mb-3" weight="normal" color="text-black dark:text-white">
      Initialement cantonnés aux calculs mathématiques, les usages de l’ordinateur n’ont cessé de grandir : imagerie numérique (photo & vidéo), communication (via le réseau internet), gestion de l’information (bases de données) etc.
    </P>
  </div>
</div>

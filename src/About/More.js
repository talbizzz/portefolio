import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Read more
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <div className="more pa7" style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}}>
          <p className="navy">
            Céline Akçağ, in Zürich geboren, begann ihre Gesangsausbildung bei ihrer Mutter. Nach dem Vorstudium am Konservatorium Zürich bei Ulrike Andersen absolvierte sie ihren Bachelor in Oper, Konzert und Pädagogik in Freiburg i.Br. bei Prof. Dorothea Wirtz. Ein Auslandsemester verbrachte sie an der Royal Academy of Music (LDN) bei Mary Nelson und Iain Ledingham. An der Theaterakademie August Everding (MUC) absolvierte sie den Master in Musiktheater/Operngesang bei KS Prof. Andreas Schmidt. Zurzeit studiert sie im Konzertmaster an der Hochschule für Musik und Theater München bei KS Prof. Christiane Iven und Okka von der Damerau, sowie im Postgradualen Studiengang Liedduo an der Universität Mozarteum Salzburg bei Prof. Pauliina Tukiainen.
            Meisterkurse mit Vesselina Kasarova, Alessandro De Marchi, Anne Le Bozec, Prof. Claudia Visca, Prof. Ulrike Sonntag, Tobias Kratzer, Gerd Uecker und Nadine Secunde haben ihre Ausbildung erweitert.
            Innerhalb des Studiums sang sie den Hänsel (Hänsel und Gretel, Humperdinck) am kleinen Haus des Theaters Freiburg, sowie an der Theaterakademie August Everding im Prinzregententheater das Glückskind (Der Teufel mit den drei goldenen Haaren, Hanke), Dorabella (Così fan tutte, Mozart) und Vanina (in L'Ancêtre von Saint-Saëns).
            Die Mezzosopranistin gewann den Studienpreis 2019 des Migros Kulturprozent und den Anerkennungspreis beim Internationalen Wettbewerb Karlsruhe für das Lied des 20. und 21. Jahrhunderts.
            Die Spielzeit 19/20 beinhalteten Cherubino (Le nozze di Figaro, Mozart) am Saarländischen Staatstheater, das Geisterkind 1 (Coraline, Turnage) am Opernhaus Zürich, und Sesto (Giulio Cesare, Händel) in konzertanter Fassung mit der Bayerischen Kammerphilharmonie.
            An den Osterfestspielen Baden-Baden und in der kleinen Berliner Philharmonie sang sie Carmen (La tragédie de Carmen, Bizet/Brook).
            In der Heubühne Zürich war sie als Nancy (Martha, Flotow) und Giannetta (L'elisir d'amore, Donizetti) zu sehen.
            Seit 2019 gehört sie zum Cast des Operncabarets 'D.I.V.A' und gibt diverse Shows in Frankreich.
            Im Konzertfach sang sie die Altpartien in 'Petite messe solennelle' (Rossini) unter der Leitung von Peter Marino, 'Chichester Psalms' (Bernstein) und 'Glagolitische Messe' (Janáček) im Herkulessaal München unter der Leitung von Benedikt Haag, sowie 'The Messiah' (Händel) unter der Leitung von Martin Frey.
            Eine rege Liedtätigkeit gehört seit Beginn ihrer Laufbahn zu ihrem Alltag. Das Repertoire reicht von Haydn bis Reimann, womit sie mit ihrer aktuellen Liedduo-Partnerin Rebeka Stojkoska diverse thematische Programme gestaltet.
            In der Spielzeit 20/21 ist sie als Modestina (Il viaggio a Reims, Rossini) am Staatstheater Augsburg und als Boulotte (Ritter Blaubart, Offenbach) am Theater Lüneburg zu sehen.
          </p>
        </div>
      </Backdrop>
    </div>
  );
}
import React from "react";

// material-ui
import { createStyles, makeStyles } from '@material-ui/core/styles';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import withRoot from './withRoot';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      display: 'inherit',
      height: '100%',
    },
    hero: {
      height: '90%',
    },
    fullscale: {
      height: '100%',
    },
    list: {
    },
    section: {
      margin: theme.spacing(3),
      padding: theme.spacing(2),
      height: '100%',
    },
    text: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
    header: {
      fontSize: '4rem'
    },
    subheader: {
      fontSize: '2.5rem'
    }
  }),
);

const Heading = ({ children }) => {
  const classes = useStyles();
  return <Typography variant="h4" color="primary" className={classes.text}>
    {children}
  </Typography>
};

const Subheading = ({ children }) => {
  const classes = useStyles();
  return <Typography variant="h5" color="secondary" className={classes.text}>
    {children}
  </Typography>
}


const Section = ({ heading, subheading, children }) => {
  const classes = useStyles();
  return <Paper square elevation={4}>
    <Grid item xs={12} className={classes.section}>
      {heading ? <Heading>{heading}</Heading> : ""}
      {subheading ? <Subheading>{subheading}</Subheading> : ""}
      {children}
    </Grid>
  </Paper>
}

const Checklist = ({ items, checkmark }) => {
  const classes = useStyles();
  const listItems = items.map((item, i) => <ListItem key={i} button>
    <ListItemIcon>
      <EmojiEventsIcon />
    </ListItemIcon>
    <ListItemText primary={item} />
  </ListItem>
  );
  return <List component="nav" className={classes.list}>
    {listItems}
  </List>
}

const Hero = ({ heading, subheading, img, children }) => {
  const classes = useStyles();
  const style = img ? {
    background: "url(" + img + ") no-repeat center center",
    backgroundSize: "cover",
    resize: "both",
  } : {};
  return <Paper square elevation={4} className={classes.hero}>
    <Grid item xs={12}
      className={classes.fullscale}
      style={style}
    >
      {(heading || subheading) ? <Box bgcolor="rgba(255, 255, 255, .9)" className={classes.opaque}>
        {heading ? <Heading>{heading}</Heading> : ""}
        {subheading ? <Subheading>{subheading}</Subheading> : ""}
      </Box> : ""}
      {children}
    </Grid>
  </Paper>
}

const Testimony = ({ avatar, name, title, children }) => {
  return <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar src={avatar} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={children} />
  </ListItem>
}

const App = props => {
  const classes = useStyles();
  return <Grid container spacing={2} className={classes.root}>
    <Section>
      <Typography variant="h2" color="secondary" className={classes.subheader}>
        4. inoffizielle
      </Typography>
      <Typography variant="h1" color="primary" className={classes.header}>
        Beermile
      </Typography>



    </Section>
    <Hero
      img="img/beermile-6.jpeg" />
    <Section heading="Hard Facts">
      <Checklist
        items={[
          "am 02. Oktober 2021",
          "17:00 Start der Profimeile",
          "17:30 Start der Jedermannmeile",
          "im LAZ Wien",
          "Meiereistraße 18, 1020 Wien"
        ]} />
      <Button href="doc/beermile2021.pdf" target="_blank" >Download Ausschreibung</Button>

    </Section>
    <Hero
      img="img/beermile-8.jpeg" />
    <Section heading="Nennung & Meldung">
      <Checklist
        items={[
          " Mindestens 30 min vor dem Start beim Wettkampfleiter (Getränkekontrolle)", "Die Aktion findet nur bei Schönwetter statt (eventuelle Absage erfolgt am Freitag)",
          "Eventuell kann es noch zu Zeit- und Ortsänderungen kommen!"
        ]} />
    </Section>
    <Hero
      img="img/beermile-7.jpeg" />
    <Section
      heading="Was unsere Athleten sagen">
      <List component="nav" className={classes.list}>
        <Testimony
          avatar="img/beermile-avatar-2.jpeg"
          name="Lukas"
          title="Pro">
          Amazing Experience and I would definitely do it again. Good services, staff were very friendly and inviting. A life time experience.
        </Testimony>
        <Testimony
          avatar="img/beermile-avatar-1.jpeg"
          name="Sofie"
          title="Casual Drinker">
          Best. Beermile. Ever.
        </Testimony>
      </List>
    </Section >
    <Hero
      img="img/beermile-4.jpeg">
    </Hero>
    <Section heading="Regeln">
      <Checklist
        items={[
          "4 Runden – 4 Biere",
          "Die Biere sind selbst mitzubringen.",
          "4 Glasflaschen á 330ml.",
          "Mindestalkoholgehalt: 5,0 Vol.%",
        ]} />
    </Section>
    <Hero
      img="img/beermile-1.jpeg" />
    <Section heading="Ausrüstung">
      <Typography variant="body1">
        Bad Taste hat sich als Standard etabliert.
        Von sportlich bis business casual ist alles
        erlaubt
      </Typography>
    </Section>
    <Hero
      img="img/beermile-3.jpeg"
      opacity={0.01}
    />
    <Section heading="Profimeile">
      <Typography variant="body1">
        In diesem Jahr wird erstmals das Starterfeld
        in ein „Profifeld“ und ein „Jedermannfeld“ aufgeteilt.
      </Typography>
      <Typography variant="body1">
        Damit soll den „Profis“ eine
        unvergessliche Stimmung geliefert
        werden.
      </Typography>
      <Typography variant="body1">
        Das „Jedermannfeld“ erhält
        damit eine Möglichkeit sich kurz
        vor dem Start den Ablauf des
        Wettkampfs noch einmal anzusehen
      </Typography>
    </Section>
    <Hero
      img="img/beermile-11.jpeg"
      opacity={0.01}
    />
    <Section heading="Rahmenprogramm">
      <Checklist
        items={[
          "Flunky Ball",
          "Beerpong",
          "Stack Cup",
          "Rage Cage",
          "Slap Cup",
          "Endlosstecken",
          "Horse Race",
          "Fuck the Dealer & Kings Cup"
        ]} />
    </Section>
    <Hero
      img="img/beermile-10.jpeg" />
    <Section heading="Hinweis">
      <Typography variant="body1">
        Es handelt sich hierbei um keine
        offizielle/angemeldete Veranstaltung. Gerade deshalb sollte
        sich am Veranstaltungsort jeder ruhig
        verhalten. Das Verschütten oder Ausspucken
        von Getränken ist strengstens untersagt.
        Aus gegebenem Anlass wird darauf hingewiesen, dass der Platzwart – außer mit seiner
        Zustimmung – nicht mit Bier angespritzt werden darf.
      </Typography>
      <Typography variant="body1">
        Es handelt sich um keine offizielle
        Veranstaltung, daher übernimmt der
        „Veranstalter“ keine Haftung für das
        Verhalten der Teilnehmer. Bitte weder "3G"-Nachweis, Hausverstand, noch Babyelefanten zu Hause vergessen.
      </Typography>
    </Section>
    <Hero
      img="img/beermile-9.jpeg" />
    <Section heading="Weitere Hinweise">
      <Typography variant="body1">
        Wer Bier mitbringt, macht sich beliebt!
      </Typography>
      <Typography variant="body1">
        Trichter detto
      </Typography>
      <Typography variant="body1">
        Dieses Event dient als Startschuss für
        weitere Feierlichkeiten. Im Anschluss wird
        die Feier an anderen Orten fortgeführt
      </Typography>
      <Typography variant="body1">
        Interessierte können (fast) alle
        leichtathletischen Disziplinen vor und nach
        dem Wettkampf vor Ort ausprobieren.
        Ausgebildete Trainer, Instruktoren und
        erfahrene Athleten können um Rat gefragt
        werden
      </Typography>
    </Section>
  </Grid >
};

export default withRoot(App);

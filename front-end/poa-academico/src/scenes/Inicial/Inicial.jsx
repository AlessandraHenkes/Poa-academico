import React from 'react';
import NavbarPoaAcademico from '../../components/NavbarPoaAcademico/NavbarPoaAcademico';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ImageOne from '../../assets/images/study.jpg';
import ImageTwo from '../../assets/images/book.jpg';
import ImageThree from '../../assets/images/education.jpg';
import ImageFour from '../../assets/images/school.jpg';
import ImageFive from '../../assets/images/tablet.jpg';
import './Inicial.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: ImageOne,
  },
  {
    imgPath: ImageFour,
  },
  {
    imgPath: ImageTwo,
  },
  {
    imgPath: ImageThree,
  },
  {
    imgPath: ImageFive,
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: 500,
    overflow: 'hidden',
    width: '100%',
  },
});

class Inicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={[classes.root, ' inicial']}>
        <NavbarPoaAcademico />
        <div className='inicial-content'>
          <div className='carousel-poa'>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents>
              {tutorialSteps.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position='static'
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size='small'
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  Anterior
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size='small'
                  onClick={this.handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Próximo
                </Button>
              }
            />
          </div>
          <div className='sobre'>
            <div className='header'>
              <h3 className='title'>Sobre nós</h3>
              <div className='texto-sobre'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                rem numquam explicabo, ullam nihil aspernatur dolor qui modi sed
                iure. Doloribus incidunt obcaecati doloremque ullam tempora
                placeat consequatur hic repellat?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Inicial.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Inicial);

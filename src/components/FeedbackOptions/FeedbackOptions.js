import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        className={css.feedbackButtons}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option.slice(0, 1).toUpperCase() + option.slice(1)}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

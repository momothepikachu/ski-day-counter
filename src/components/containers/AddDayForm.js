import AddDayForm from '../ui/AddDayForm'
import { connect } from 'react-redux'
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, ownProps) => 
	({
		suggestions: state.resortNames.suggestions,
		fetching: state.resortNames.fetching,
		router: ownProps.history
	})

const mapDispatchToProps = dispatch => 
	({
		onNewDay({resort,date,powder,backcountry}) {
			dispatch(
				addDay(resort, date, powder, backcountry)
			)
		},
		onChange(value) {
			if (value) {
				dispatch(
					suggestResortNames(value)
				)
			} else {
				dispatch(
					clearSuggestions()
				)
			}
		},
		onClear() {
			dispatch(
				clearSuggestions()
			)
		}
	})	

export default connect(mapStateToProps, mapDispatchToProps)(AddDayForm)	


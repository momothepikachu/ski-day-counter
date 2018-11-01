import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

const mapStateToProps = (state, ownProps) => 
  ({
    days: state.allSkiDays,
    filter: ownProps.match.params.filter
  })

const mapDispatchToProps = (disptach, ownProps) => 
  ({
    
    onRemoveDay(date) {
      disptach(
        removeDay(date)
      )
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)
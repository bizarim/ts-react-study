import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import getRandomColor from '../lib/getRandomColor';
import CounterList from '../components/counterList/CounterList';
import { RootState } from '../reducers';
import { CounterActionTypes, incrementCounter, decrementCounter, setColorCounter } from '../actions/counter';

const mapStateToProps = (state: RootState) => ({
    counters: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<CounterActionTypes>) => ({
    onIncrement: (index: number) => dispatch(incrementCounter(index)),
    onDecrement: (index: number) => dispatch(decrementCounter(index)),
    onSetColor: (index: number) => dispatch(setColorCounter(index, getRandomColor()))
});

// 데이터와 함수들이 props로 붙은 컴포넌트 생성

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;
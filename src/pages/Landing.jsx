import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Card from '../components/Card';
import TodoContainer from '../components/TodoContainer';

const Landing = () => {
    const userName = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#efefef] p-10 border rounded-md">
                {/* Header */}
                <Header name={userName.state.user}></Header>
                {/* Card */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={'#8272DA'} title={'23'} subtitle={'Chennai'}></Card>
                    <Card bgcolor={'#FD6663'} title={'July 30'} subtitle={'12.28:10'}></Card>
                    <Card bgcolor={'#FCA201'} title={'Built Using'} subtitle={'React'}></Card>
                </div>
                {/* Todo Container */}
                <TodoContainer></TodoContainer>
            </div>
        </div>
    )
}
export default Landing;
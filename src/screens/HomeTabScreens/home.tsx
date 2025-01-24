import { Button, Text, View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { screenNames } from '../../conifg/constants';
import InputComponent from '../../components/InputComponent';
import RequestCard from '../../components/RequestCard';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <InputComponent 
        label={"Weight"}
        isRequired={true}
      />
      <RequestCard 
        label={"Weight"}
        isRequired={true}
      />
      <ButtonComponent
        isFillRequired={true}
        title={"Home"}
        onPress={() => { navigation.navigate(screenNames.CREATE_REQUEST_SCREEN) }}
      />
    </View>
  );
}

export default Home;
import * as React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { render } from "react-dom";
import LinearGradient from 'react-native-linear-gradient';
import ModalCard from "./Modal";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const staticData = [
  {
    'id': 1,
    'title': 'Image1',
    'subtitle': 'Subtitle for Image1',
    'descripition': 'Description for Image1',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406__480.jpg'
  },
  {
    'id': 2,
    'title': 'Image2',
    'subtitle': 'Subtitle for Image2',
    'descripition': 'Description for Image2',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/14/14/51/alps-6545561__480.jpg'
  },
  {
    'id': 3,
    'title': 'Image3',
    'subtitle': 'Subtitle for Image3',
    'descripition': 'Description for Image3',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497__480.jpg'
  },
  {
    'id': 4,
    'title': 'Image4',
    'subtitle': 'Subtitle for Image4',
    'descripition': 'Description for Image4',
    'uri': 'https://cdn.pixabay.com/photo/2020/01/03/20/29/rock-4739036__480.jpg'
  },
  {
    'id': 5,
    'title': 'Image5',
    'subtitle': 'Subtitle for Image5',
    'descripition': 'Description for Image5',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497__480.jpg'
  },
  {
    'id': 6,
    'title': 'Image6',
    'subtitle': 'Subtitle for Image6',
    'descripition': 'Description for Image6',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/23/17/07/volcano-6487743__480.jpg'
  },
  {
    'id': 7,
    'title': 'Image7',
    'subtitle': 'Subtitle for Image7',
    'descripition': 'Description for Image7',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196__480.jpg'
  },
  {
    'id': 8,
    'title': 'Image8',
    'subtitle': 'Subtitle for Image8',
    'descripition': 'Description for Image8',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/14/12/01/poppies-6465890__480.jpg'
  },
  {
    'id': 9,
    'title': 'Image9',
    'subtitle': 'Subtitle for Image9',
    'descripition': 'Description for Image9',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/23/17/07/volcano-6487743__480.jpg'
  },
  {
    'id': 10,
    'title': 'Image10',
    'subtitle': 'Subtitle for Image10',
    'descripition': 'Description for Image10',
    'uri': 'https://cdn.pixabay.com/photo/2020/10/27/03/48/gioc-village-waterfall-5689446__480.jpg'
  },
  {
    'id': 11,
    'title': 'Image11',
    'subtitle': 'Subtitle for Image11',
    'descripition': 'Description for Image11',
    'uri': 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    'id': 12,
    'title': 'Image12',
    'subtitle': 'Subtitle for Image12',
    'descripition': 'Description for Image12',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/14/12/01/poppies-6465890__480.jpg'
  },
  {
    'id': 13,
    'title': 'Image13',
    'subtitle': 'Subtitle for Image13',
    'descripition': 'Description for Image13',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595__480.jpg'
  },
  {
    'id': 14,
    'title': 'Image14',
    'subtitle': 'Subtitle for Image14',
    'descripition': 'Description for Image14',
    'uri': 'https://cdn.pixabay.com/photo/2020/10/27/03/48/gioc-village-waterfall-5689446__480.jpg'
  },
  {
    'id': 15,
    'title': 'Image15',
    'subtitle': 'Subtitle for Image15',
    'descripition': 'Description for Image15',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/14/12/01/poppies-6465890__480.jpg'
  },
  {
    'id': 16,
    'title': 'Image16',
    'subtitle': 'Subtitle for Image16',
    'descripition': 'Description for Image16',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497__480.jpg'
  },
  {
    'id': 17,
    'title': 'Image17',
    'subtitle': 'Subtitle for Image17',
    'descripition': 'Description for Image17',
    'uri': 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    'id': 18,
    'title': 'Image18',
    'subtitle': 'Subtitle for Image18',
    'descripition': 'Description for Image18',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595__480.jpg'
  },
  {
    'id': 19,
    'title': 'Image19',
    'subtitle': 'Subtitle for Image19',
    'descripition': 'Description for Image19',
    'uri': 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    'id': 20,
    'title': 'Image20',
    'subtitle': 'Subtitle for Image20',
    'descripition': 'Description for Image20',
    'uri': 'https://images.unsplash.com/photo-1629121958394-3be95d8c057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
  },
  {
    'id': 21,
    'title': 'Image21',
    'subtitle': 'Subtitle for Image21',
    'descripition': 'Description for Image21',
    'uri': 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    'id': 22,
    'title': 'Image22',
    'subtitle': 'Subtitle for Image22',
    'descripition': 'Description for Image22',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/14/12/01/poppies-6465890__480.jpg'
  },
  {
    'id': 23,
    'title': 'Image23',
    'subtitle': 'Subtitle for Image23',
    'descripition': 'Description for Image23',
    'uri': 'https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595__480.jpg'
  },
  {
    'id': 24,
    'title': 'Image24',
    'subtitle': 'Subtitle for Image24',
    'descripition': 'Description for Image24',
    'uri': 'https://cdn.pixabay.com/photo/2020/10/27/03/48/gioc-village-waterfall-5689446__480.jpg'
  },
  {
    'id': 25,
    'title': 'Image25',
    'subtitle': 'Subtitle for Image25',
    'descripition': 'Description for Image25',
    'uri': 'https://cdn.pixabay.com/photo/2021/07/14/12/01/poppies-6465890__480.jpg'
  },
]

const App = () => {
    return (
      <LinearGradient colors={['#eecda3', '#ef629f', '#192f6a']} style={styles.linearGradient}>
        <ScrollView>
          {staticData.map((item) => (
            <>
          <Card style={{margin: 20}}>
            <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
            <Card.Cover source={{ uri: item.uri }} />
            <Card.Content>
              <Title>Card Description:</Title>
              <Paragraph>{item.descripition}</Paragraph>
            </Card.Content>
          </Card>
          </>
          ))}
          <ModalCard/>
        </ScrollView>
      </LinearGradient>
    );
}

export default App;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});
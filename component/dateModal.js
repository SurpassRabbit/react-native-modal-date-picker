import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Dimensions,
  View,
} from 'react-native'

export default class DateModal extends Component {
  clickPicker() {}
  render() {
    const { 
      onPress, 
      visible, 
      modalColor, 
      children,
      pickerHeightStyle, 
      pickerColorStyle,
      Styles,
      activeOpacity
    } = this.props
    const { width, height } = Dimensions.get('window')
    const modalBackgroundStyle = {
      backgroundColor: (modalColor ? modalColor :'rgba(0,0,0,0.4)'),
    }
    return (
      <Modal 
        animationType="slide"
        onRequestClose={()=>{}}
        visible={visible} 
        transparent={true}
      >
        <TouchableOpacity 
          style={[{
          width,
          height,
          },modalBackgroundStyle]} 
          onPress={onPress}
          activeOpacity={activeOpacity}
        >
          <View style={[{ width },Styles.picker,pickerHeightStyle]}>
            <TouchableWithoutFeedback 
              style={[{ width },Styles.pickerView, pickerHeightStyle, pickerColorStyle]} 
              onPress={this.clickPicker}
            >
              <View style={[Styles.pickerView]}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }
}


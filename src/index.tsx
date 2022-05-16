import React, { FC, ReactElement } from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';

export interface StepperProps {
  active: number;
  content: ReactElement[];
  wrapperStyle?: ViewStyle;
  stepStyle?: ViewStyle;
  stepTextStyle?: TextStyle;
}

const isActive = (keyName: number, myNumber: number): boolean => {
  return keyName < myNumber + 1;
};

const Stepper: FC<StepperProps> = (props) => {
  const { active, content, wrapperStyle, stepStyle, stepTextStyle } = props;

  return (
    <View style={wrapperStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <View
                style={[
                  styles.stepper,
                  {
                    opacity: isActive(i, active) ? 1 : 0.3,
                  },
                  stepStyle,
                ]}
              >
                {isActive(i, active) ? (
                  <Text style={[styles.white, stepTextStyle]}>&#10003;</Text>
                ) : (
                  <Text style={[styles.white, stepTextStyle]}>{i + 1}</Text>
                )}
              </View>
            </React.Fragment>
          );
        })}
      </View>
      {content[active]}
    </View>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  stepper: {
    backgroundColor: '#1976d2',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Stepper;

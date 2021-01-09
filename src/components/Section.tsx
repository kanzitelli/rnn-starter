import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useStyles from 'src/hooks/useStyles';
import { generateShadow } from 'src/utils/helpMethods';

type SectionProps = {
  children: any;
  title: string;
  bg?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  bg = false,
}) => {
  const { styles } = useStyles(_styles);

  return (
    <View style={styles.section}>
      <Text style={styles.header}>
        { title }
      </Text>

      <View style={[
        styles.contentContainer,
        bg ? [styles.bg, generateShadow()] : {},
      ]}>
        { children }
      </View>
    </View>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },

  section: {
    padding: theme.sizes.s,
    marginVertical: theme.sizes.s,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.grey,
    marginBottom: theme.sizes.s,
  },

  contentContainer: {
    marginHorizontal: theme.sizes.s,
    borderRadius: theme.sizes.s,
  },
  bg: {
    backgroundColor: theme.colors.sectionBg,
  },
})

export default Section;
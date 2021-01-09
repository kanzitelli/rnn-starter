import { MailComposerOptions } from "expo-mail-composer";

const useContants = () => {
  return {
    colors: {
      main: '#4d7198',
      black: '#000',
      white: '#fff',
      blue: '#4d7198',
      yellow: '#fbc531',
      red: '#e74c3c',
      light: 'rgb(240, 240, 240)',
      grey: '#555',
      darkGrey: '#222',
      lightGrey: '#dcdde1',
      greyOpacity: 'rgba(200, 200, 200, 0.7)',
    },
    sizes: {
      xs: 4,
      s: 8,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 40,
    },

    settings: {
      general: {
        mailOptions: {
          recipients: ['dev@batyr.io'],
          subject: '[rnn-starter] Question/Request/Other',
          body: 'Please, describe your question/request/something else? 🙂\n\n',
        } as MailComposerOptions,
      },
      links: {
        github: 'https://github.com/kanzitelli/rnn-starter',
        website: 'https://cli-rn.batyr.io',
        app: 'https://cli-rn.batyr.io/app',
        personalGithub: 'https://github.com/kanzitelli',
      }
    }
  }
}

export default useContants;
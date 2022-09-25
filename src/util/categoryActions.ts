
export enum categoryTypes {
  energy = 'energy',
  transport = 'transport',
  tax = 'tax',
  education = 'education',
  health = 'health'
}

export enum scoreResult {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export const scoreCommonData = {
  [scoreResult.low]: {
    actionTitle: 'Retardatário',
    textColor: '#F2CCD4',
    iconColor: '#F2CCD4',
  },
  [scoreResult.medium]: {
    actionTitle: 'Médio',
    textColor: '#FFD600',
    iconColor: '#FFD600',
  },
  [scoreResult.high]: {
    actionTitle: 'Líder',
    textColor: '#009900',
    iconColor: '#009900',
  },
}

export const categoryActions = {
  [categoryTypes.energy]: {
    actionTitle: 'Energia',
    scoreResult: {
      [scoreResult.low]: {
        actionDescription: 'Você tem um consumo energético acima da média, isso tem um impacto negativo para o mundo. Para melhorar seu score procure utilizar melhor a luz solar, tomar banhos mais frios ou mornos e reduza o consumo de energia.',
      },
      [scoreResult.medium]: {
        actionDescription: 'Seu consumo de energia segue a média, para se diferenciar e melhorar seu score diminuindo ainda mais o impacto negativo no mundo procure utilizar melhor a luz solar, tomar banhos mais frios ou mornos e reduza o consumo de energia.',
      },
      [scoreResult.high]: {
        actionDescription: 'Parabéns você tem um comportamento exemplar quando o assunto é consumo de energia, continue assim e ajude o mundo a ser mais sustentável.',
      }
    },
  },
  [categoryTypes.transport]: {
    actionTitle: 'Transporte',
    scoreResult: {
      [scoreResult.low]: {
        actionDescription: 'Você tem um consumo de recursos de transporte acima da média, isso tem um impacto negativo para o mundo. Para melhorar seu score procure alternativas de transporte mais sustentáveis e saudáveis, como transporte coletivo, bicicletas e se possível até um home office algumas vezes na semana.',
      },
      [scoreResult.medium]: {
        actionDescription: 'Seu consumo de recursos de transporte segue a média, para se diferenciar e melhorar seu score diminuindo ainda mais o impacto negativo no mundo procure alternativas de transporte mais sustentáveis e saudáveis, como transporte coletivo, bicicletas e se possível até um home office algumas vezes na semana.',
      },
      [scoreResult.high]: {
        actionDescription: 'Parabéns você tem um comportamento exemplar quando o assunto é transporte, continue assim e ajude o mundo a ser mais sustentável.',
      }
    },
  },
  [categoryTypes.tax]: {
    actionTitle: 'Imposto',
    scoreResult: {
      [scoreResult.low]: {
        actionDescription: 'Você tem investimentos em aspectos de responsabilidade social abaixo da média, procure rever seus gastos e investimentos nesse aspecto e melhore seu impacto socioambiental.',
      },
      [scoreResult.medium]: {
        actionDescription: 'Seus investimentos em aspectos de responsabilidade social na dentro da média, para melhorar seu score procure rever seus gastos e investimentos nesse aspecto e melhore seu impacto socioambiental.',
      },
      [scoreResult.high]: {
        actionDescription: 'Parabéns você tem um comportamento exemplar quando o assunto é responsabilidade social, continue assim e ajude o mundo a ser mais sustentável.',
      }
    },
  },
  [categoryTypes.education]: {
    actionTitle: 'Educação',
    scoreResult: {
      [scoreResult.low]: {
        actionDescription: 'Você tem investimentos em  desenvolvimento de capital humano abaixo da média procure rever seus gastos e investimentos nesse aspecto e melhore seu impacto social.',
      },
      [scoreResult.medium]: {
        actionDescription: 'Você tem investimentos em  desenvolvimento de capital humano dentro da média, para melhorar o impacto social e seu score procure rever seus gastos e investimentos nesse aspecto.',
      },
      [scoreResult.high]: {
        actionDescription: 'Parabéns você tem um comportamento exemplar quando o assunto é educação, continue assim e ajude o mundo a ser mais sustentável.',
      }
    },
  },
  [categoryTypes.health]: {
    actionTitle: 'Saúde',
    scoreResult: {
      [scoreResult.low]: {
        actionDescription: 'Você tem investimentos em saúde e bem estar abaixo da média procure rever seus gastos e investimentos nesse aspecto.',
      },
      [scoreResult.medium]: {
        actionDescription: 'Você tem investimentos em saúde e bem estar dentro da média procure rever seus gastos e investimentos nesse aspecto.',
      },
      [scoreResult.high]: {
        actionDescription: 'Parabéns você tem um comportamento exemplar quando o assunto é saúde e bem estar, continue assim e ajude o mundo a ser mais sustentável.',
      }
    }
  }
}
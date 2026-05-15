// ─────────────────────────────────────────────────────────────────────────────
// COLETORES DE DADOS
// ─────────────────────────────────────────────────────────────────────────────
import tc15_1 from '@/imgs/coletores/tc15.jpg'
import tc15_2 from '@/imgs/coletores/tc15.png'
import tc15_3 from '@/imgs/coletores/tc15.webp'
import tc21_1 from '@/imgs/coletores/tc21.jpg'
import mc22_1 from '@/imgs/coletores/mc22.jpg'
import mc33_1 from '@/imgs/coletores/mc33.jpg'
import mc94_1 from '@/imgs/coletores/mc94.png'
import dt50x_1 from '@/imgs/coletores/DT50X.png'
import dt50x_2 from '@/imgs/coletores/dt50.png'
import dt50x_3 from '@/imgs/coletores/dt50h.jpg'
import eda61k_1 from '@/imgs/coletores/EDA61K.webp'
import ct48_1 from '@/imgs/coletores/ct48.jpg'
import ct48_2 from '@/imgs/coletores/ct48.webp'
import rt40_1 from '@/imgs/coletores/rt40.png'
import rt40_2 from '@/imgs/coletores/rt40-hand.png'
import memor11_1 from '@/imgs/coletores/datalogic_memor_11.png'

// ─────────────────────────────────────────────────────────────────────────────
// TABLETS
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// LEITORES
// ─────────────────────────────────────────────────────────────────────────────
import gryphon4200_1 from '@/imgs/leitores/Gryphon4200Series.png'
import heron_1 from '@/imgs/leitores/Heron HD3430.png'
import magellan_1 from '@/imgs/leitores/magellan-9300i.webp'
import magellan_2 from '@/imgs/leitores/datalogic_9300i_9400i.png'
import rida_1 from '@/imgs/leitores/RIDA.png'
import qs2200_1 from '@/imgs/leitores/QS2200Series.png'
import lanehawk_1 from '@/imgs/leitores/LaneHawkLH5000_882x822.png'

// ─────────────────────────────────────────────────────────────────────────────
// IMPRESSORAS
// ─────────────────────────────────────────────────────────────────────────────
import zd400_1 from '@/imgs/impressoras/zd400-series-right-3x2-3600.jpg'
import zd220_1 from '@/imgs/impressoras/impressora_termica_de_etiquetas_zebra_zd220_203_dpi_usb_evolucao_da_gc420t_16035_1_20200127145111.webp'
import zt510_1 from '@/imgs/impressoras/zt510-front-left-3x2-3600.jpg'
import zt421_1 from '@/imgs/impressoras/zt421-photography-website-left-1x1-300x300.jpg'
import zt200_1 from '@/imgs/impressoras/zt200-series-front-left-with-shadow-3x2-3600.jpg'
import zq200_1 from '@/imgs/impressoras/zq200-series-left-media-3x2-3600.jpg'
import zq310_1 from '@/imgs/impressoras/zq310outdoor-3x2-3600.jpg.imgo.jpg'
import zq600_1 from '@/imgs/impressoras/zq600-series-right-facing-zq630-3x2-3600.jpg'
import pd42_1 from '@/imgs/impressoras/PD42-500x500.jpg'
import pd42_2 from '@/imgs/impressoras/pd42.webp'
import pd45_1 from '@/imgs/impressoras/impressora_de_etiquetas_honeywell_pd45_300dpi_usb_serial_e_ethernet_1231_1_e2268e4b101fc8719043d558beb37f5e.webp'
import tscml_1 from '@/imgs/impressoras/tsc-ml.png'
import tscmh_1 from '@/imgs/impressoras/tsc-mh.png'
import tscmb_1 from '@/imgs/impressoras/tsc-mb.png'

// ─────────────────────────────────────────────────────────────────────────────
// ACCESS POINTS
// ─────────────────────────────────────────────────────────────────────────────
import u6plus_1 from '@/imgs/access-point/U6+.png'
import u6mesh_1 from '@/imgs/access-point/U6-Mesh_002_0d58836d-4123-4111-bf06-c16f037f2acd_grande.png'
import uapm_1 from '@/imgs/access-point/Ubiquiti-UniFi-Access-Point-AC-Mesh-UAP-AC-M.webp'
import ap3000_1 from '@/imgs/access-point/ap-3000-ax-frontal.png'
import ap460c_1 from '@/imgs/access-point/ap460c_wr_1.png'
import ap5010_1 from '@/imgs/access-point/AP5010-1024x842.png'
import proap1 from '@/imgs/access-point/ProApACGNInside.png'

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIAS — slug → label de exibição
// ─────────────────────────────────────────────────────────────────────────────
export const CATEGORIAS = {
  'coletores-de-dados': 'Coletor de Dados',
  'access-points':      'Access Point',
  'leitores':           'Leitores',
  'impressoras':        'Impressoras',
  'tablets':            'Tablets',
  'acessorios':         'Acessórios',
}

// ─────────────────────────────────────────────────────────────────────────────
// CATÁLOGO DE PRODUTOS
// Campos obrigatórios: slug, nome, marca, categoria, fotos, whatsappMensagem
// Campos opcionais:   descricao, destaques, informacoesTecnicas
//
// Para adicionar um produto:
//  1. Importe as fotos no topo deste arquivo
//  2. Adicione uma entrada abaixo seguindo o padrão existente
//  3. Certifique-se que o slug é único e não contém espaços
// ─────────────────────────────────────────────────────────────────────────────
export const produtos = {

  // ── COLETORES DE DADOS ───────────────────────────────────────────────────

  tc15: {
    slug: 'tc15',
    nome: 'Zebra TC15',
    marca: 'Zebra',
    categoria: 'coletores-de-dados',
    descricao:
      'O Zebra TC15 é um coletor Android robusto e acessível, projetado para otimizar operações de logística, varejo e armazém. Com leitor 2D integrado, tela resistente e bateria de longa duração, garante máxima produtividade no dia a dia.',
    destaques: [
      'Android 11 com suporte estendido (LifeGuard)',
      'Leitor 2D integrado de alta performance',
      'Wi-Fi 802.11 a/b/g/n/ac (Wi-Fi 5)',
      'Resistente a quedas de 1,2 m',
      'IP53 – proteção contra poeira e respingos',
      'Bateria 4.150 mAh removível',
    ],
    fotos: [tc15_1, tc15_2, tc15_3],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 11',
      'Processador': 'Qualcomm Octa-Core 2.0 GHz',
      'Memória RAM': '3 GB',
      'Armazenamento': '32 GB',
      'Tela': '5,0" HD (1280 × 720) IPS',
      'Leitor de Código': '2D Imager',
      'Câmera': '13 MP traseira / 5 MP frontal',
      'Wi-Fi': '802.11 a/b/g/n/ac (Wi-Fi 5)',
      'Bluetooth': '5.0',
      'GPS': 'Integrado',
      'NFC': 'Sim',
      'Bateria': '4.150 mAh removível',
      'Resistência a quedas': '1,2 metros',
      'Classificação IP': 'IP53',
      'Dimensões': '156 × 75,7 × 11,5 mm',
      'Peso': '195 g (com bateria)',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Zebra TC15. Podem me enviar mais informações e preços?',
  },

  tc21: {
    slug: 'tc21',
    nome: 'Zebra TC21',
    marca: 'Zebra',
    categoria: 'coletores-de-dados',
    descricao:
      'O Zebra TC21 é um coletor touchscreen slim e acessível, voltado para varejo e logística leve. Design moderno semelhante a um smartphone, com a robustez característica da Zebra.',
    destaques: [
      'Android 10 com suporte LifeGuard',
      'Design slim no estilo smartphone',
      'Leitor 2D integrado',
      'Wi-Fi dual band 802.11 a/b/g/n/ac',
      'Bluetooth 5.0 e NFC integrados',
      'Classificação IP52',
    ],
    fotos: [tc21_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Quad-Core 1.8 GHz',
      'Memória RAM': '2 GB',
      'Armazenamento': '16 GB',
      'Tela': '5,0" HD (1280 × 720)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '5.0',
      'NFC': 'Sim',
      'Bateria': '3.000 mAh',
      'Classificação IP': 'IP52',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Zebra TC21. Podem me enviar mais informações e preços?',
  },

  mc22: {
    slug: 'mc22',
    nome: 'Zebra MC22',
    marca: 'Zebra',
    categoria: 'coletores-de-dados',
    descricao:
      'O Zebra MC22 é um coletor compacto e leve, ideal para operações de varejo e logística leve. Projetado para mobilidade e agilidade no atendimento ao cliente e controle de estoque.',
    destaques: [
      'Android 10 com suporte LifeGuard',
      'Design compacto e ergonômico',
      'Leitor 2D integrado',
      'Wi-Fi dual band 802.11 a/b/g/n/ac',
      'Tela de 4" resistente a riscos',
      'Bateria 3.000 mAh',
    ],
    fotos: [mc22_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Quad-Core 1.8 GHz',
      'Memória RAM': '2 GB',
      'Armazenamento': '16 GB',
      'Tela': '4,0" (800 × 480)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '5.0',
      'NFC': 'Sim',
      'Bateria': '3.000 mAh',
      'Classificação IP': 'IP52',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Zebra MC22. Podem me enviar mais informações e preços?',
  },

  mc33: {
    slug: 'mc33',
    nome: 'Zebra MC33',
    marca: 'Zebra',
    categoria: 'coletores-de-dados',
    descricao:
      'O Zebra MC33 combina alta durabilidade com desempenho avançado, sendo a escolha ideal para ambientes industriais exigentes. Com pistola integrada e scanner de longo alcance.',
    destaques: [
      'Android 8.1 com suporte LifeGuard',
      'Pistola ergonômica integrada',
      'Leitor 1D/2D de longo alcance',
      "IP65 – proteção total contra poeira e jatos d'água",
      'Resistente a quedas de 1,8 m',
      'Wi-Fi 802.11 a/b/g/n/ac',
    ],
    fotos: [mc33_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 8.1',
      'Processador': 'Qualcomm Octa-Core 2.2 GHz',
      'Memória RAM': '4 GB',
      'Armazenamento': '32 GB',
      'Tela': '4,0" WVGA (800 × 480)',
      'Leitor de Código': '1D/2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '4.1',
      'Bateria': '5.200 mAh',
      'Resistência a quedas': '1,8 metros',
      'Classificação IP': 'IP65',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Zebra MC33. Podem me enviar mais informações e preços?',
  },

  mc94: {
    slug: 'mc94',
    nome: 'Zebra MC94',
    marca: 'Zebra',
    categoria: 'coletores-de-dados',
    descricao:
      'O Zebra MC94 é o coletor de última geração para ambientes industriais de missão crítica. Wi-Fi 6, processador de alto desempenho e máxima durabilidade para operações exigentes.',
    destaques: [
      'Android 11 com suporte LifeGuard',
      'Wi-Fi 6 (802.11 ax) de nova geração',
      'Leitor 2D de alto desempenho',
      'IP65 – resistência industrial completa',
      'Resistente a quedas de 1,8 m',
    ],
    fotos: [mc94_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 11',
      'Processador': 'Qualcomm Octa-Core 2.4 GHz',
      'Memória RAM': '6 GB',
      'Armazenamento': '128 GB',
      'Tela': '4,0" WVGA (800 × 480)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac/ax (Wi-Fi 6)',
      'Bluetooth': '5.1',
      'Resistência a quedas': '1,8 metros',
      'Classificação IP': 'IP65',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Zebra MC94. Podem me enviar mais informações e preços?',
  },

  dt50x: {
    slug: 'dt50x',
    nome: 'Urovo DT50X',
    marca: 'Urovo',
    categoria: 'coletores-de-dados',
    descricao:
      'O Urovo DT50X é um coletor Android moderno com excelente custo-benefício, voltado para logística, transporte e armazém. IP67, longa autonomia e 4G LTE opcional.',
    destaques: [
      'Android 10 GMS',
      'Leitor 2D de alta velocidade',
      'Wi-Fi dual band 802.11 a/b/g/n/ac',
      '4G LTE opcional',
      'IP67 – à prova de poeira e imersão',
      'Bateria 4.200 mAh',
    ],
    fotos: [dt50x_1, dt50x_2, dt50x_3],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Octa-Core 2.0 GHz',
      'Memória RAM': '3 GB',
      'Armazenamento': '32 GB',
      'Tela': '5,0" FHD (1920 × 1080) IPS',
      'Leitor de Código': '2D Imager',
      'Câmera': '13 MP traseira',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '5.0',
      '4G': 'Sim (opcional)',
      'GPS': 'Integrado',
      'NFC': 'Sim',
      'Bateria': '4.200 mAh',
      'Classificação IP': 'IP67',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Urovo DT50X. Podem me enviar mais informações e preços?',
  },

  rt40: {
    slug: 'rt40',
    nome: 'Urovo RT40',
    marca: 'Urovo',
    categoria: 'coletores-de-dados',
    descricao:
      'O Urovo RT40 é um terminal robusto com pistola integrada para picking, recebimento e expedição em centros de distribuição. Bateria de 6.700 mAh para turnos longos.',
    destaques: [
      'Android 10',
      'Pistola de gatilho integrada',
      'Leitor 2D de longo alcance',
      'IP65 – proteção industrial completa',
      'Resistente a quedas de 1,8 m',
      'Bateria 6.700 mAh de longa duração',
    ],
    fotos: [rt40_1, rt40_2],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Octa-Core 2.0 GHz',
      'Memória RAM': '4 GB',
      'Armazenamento': '64 GB',
      'Tela': '5,5" FHD (1920 × 1080)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '5.0',
      '4G': 'Sim',
      'Bateria': '6.700 mAh',
      'Resistência a quedas': '1,8 metros',
      'Classificação IP': 'IP65',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Urovo RT40. Podem me enviar mais informações e preços?',
  },

  eda61k: {
    slug: 'eda61k',
    nome: 'Honeywell EDA61K',
    marca: 'Honeywell',
    categoria: 'coletores-de-dados',
    descricao:
      'O Honeywell EDA61K é um coletor empresarial com tela de 6,1" e Wi-Fi 6, projetado para operações de logística, varejo e saúde com suporte ao Android Enterprise.',
    destaques: [
      'Android 10 com Android Enterprise',
      'Tela de 6,1" Full HD',
      'Leitor 2D integrado',
      'Wi-Fi 6 (802.11 ax)',
      'Bluetooth 5.0',
      'Bateria 5.000 mAh',
    ],
    fotos: [eda61k_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Octa-Core 2.0 GHz',
      'Memória RAM': '4 GB',
      'Armazenamento': '64 GB',
      'Tela': '6,1" FHD (1080 × 2160) IPS',
      'Leitor de Código': '2D Imager',
      'Câmera': '13 MP traseira / 8 MP frontal',
      'Wi-Fi': '802.11 a/b/g/n/ac/ax (Wi-Fi 6)',
      'Bluetooth': '5.0',
      'GPS': 'Integrado',
      'NFC': 'Sim',
      'Bateria': '5.000 mAh',
      'Classificação IP': 'IP52',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Honeywell EDA61K. Podem me enviar mais informações e preços?',
  },

  ct48: {
    slug: 'ct48',
    nome: 'Honeywell CT48',
    marca: 'Honeywell',
    categoria: 'coletores-de-dados',
    descricao:
      'O Honeywell CT48 é um coletor robusto com pistola integrada e IP67, desenvolvido para armazéns, centros de distribuição e operações de campo de alto volume.',
    destaques: [
      'Android 11 com Android Enterprise',
      'Pistola ergonômica integrada',
      'Leitor 2D de alta performance',
      'IP67 – à prova de poeira e imersão',
      'Resistente a quedas de 1,5 m',
      'Wi-Fi 6 (802.11 ax)',
    ],
    fotos: [ct48_1, ct48_2],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 11',
      'Processador': 'Qualcomm Octa-Core 2.2 GHz',
      'Memória RAM': '4 GB',
      'Armazenamento': '64 GB',
      'Tela': '4,0" WVGA (800 × 480)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac/ax (Wi-Fi 6)',
      'Bluetooth': '5.1',
      'Bateria': '4.000 mAh',
      'Resistência a quedas': '1,5 metros',
      'Classificação IP': 'IP67',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Honeywell CT48. Podem me enviar mais informações e preços?',
  },

  // ── TABLETS ──────────────────────────────────────────────────────────────

  memor11: {
    slug: 'memor11',
    nome: 'Datalogic Memor 11',
    marca: 'Datalogic',
    categoria: 'coletores-de-dados',
    descricao:
      'O Datalogic Memor 11 é um tablet Android robusto com leitor 2D integrado, projetado para operações de varejo, logística e armazém que exigem tela maior e interface touch intuitiva.',
    destaques: [
      'Android 10 GMS',
      'Tela de 5,0" HD',
      'Leitor 2D integrado',
      'Wi-Fi dual band 802.11 a/b/g/n/ac',
      'NFC integrado',
      'Bateria 4.000 mAh',
    ],
    fotos: [memor11_1],
    informacoesTecnicas: {
      'Sistema Operacional': 'Android 10',
      'Processador': 'Qualcomm Octa-Core 2.0 GHz',
      'Memória RAM': '3 GB',
      'Armazenamento': '32 GB',
      'Tela': '5,0" HD (1280 × 720)',
      'Leitor de Código': '2D Imager',
      'Wi-Fi': '802.11 a/b/g/n/ac',
      'Bluetooth': '5.0',
      'NFC': 'Sim',
      'Bateria': '4.000 mAh',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic Memor 11. Podem me enviar mais informações e preços?',
  },

  // ── LEITORES ─────────────────────────────────────────────────────────────

  gryphon4200: {
    slug: 'gryphon4200',
    nome: 'Datalogic Gryphon 4200',
    marca: 'Datalogic',
    categoria: 'leitores',
    descricao:
      'O Datalogic Gryphon 4200 é um leitor de bancada versátil com leitura omnidirecional de códigos 1D e 2D, ideal para PDV, logística e controle de qualidade.',
    destaques: [
      'Leitura omnidirecional 1D e 2D',
      'Conexão USB/RS-232',
      'Apontar e ler com feedback sonoro',
      'Compatível com todos os tipos de código de barras',
      'Base de suporte incluída',
    ],
    fotos: [gryphon4200_1],
    informacoesTecnicas: {
      'Tipo': 'Leitor de bancada',
      'Leitura': '1D e 2D (omnidirecional)',
      'Interfaces': 'USB, RS-232, Keyboard Wedge',
      'Velocidade': 'Até 1.000 varreduras/seg',
      'Profundidade de campo': '1 – 40 cm',
      'Temperatura de operação': '0°C a 50°C',
      'Classificação IP': 'IP30',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic Gryphon 4200. Podem me enviar mais informações e preços?',
  },

  'heron-hd3430': {
    slug: 'heron-hd3430',
    nome: 'Datalogic Heron HD3430',
    marca: 'Datalogic',
    categoria: 'leitores',
    descricao:
      'O Datalogic Heron HD3430 é um leitor de apresentação 2D de alto desempenho com leitura omnidirecional, ideal para PDV e balcões de atendimento.',
    destaques: [
      'Leitor 2D omnidirecional',
      'Suporte hands-free e manual',
      'Leitura de códigos em tela de smartphone',
      'Tecnologia Green Spot para confirmação visual',
      'Conectividade USB/RS-232',
    ],
    fotos: [heron_1],
    informacoesTecnicas: {
      'Tipo': 'Leitor de apresentação',
      'Leitura': '1D e 2D',
      'Interfaces': 'USB, RS-232',
      'Profundidade de campo': '0 – 35 cm',
      'Classificação IP': 'IP30',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic Heron HD3430. Podem me enviar mais informações e preços?',
  },

  'magellan-9300i': {
    slug: 'magellan-9300i',
    nome: 'Datalogic Magellan 9300i',
    marca: 'Datalogic',
    categoria: 'leitores',
    descricao:
      'O Datalogic Magellan 9300i é um scanner omnidirecional de alto desempenho para checkout de supermercado e varejo de alto volume, com leitura de códigos 1D e 2D em múltiplas faces.',
    destaques: [
      'Leitura omnidirecional multi-face',
      'Tecnologia CORELASER de alta velocidade',
      'Leitura 1D e 2D integrada',
      'Suporte a mobile payment (QR Code)',
      'Alta durabilidade para varejo intenso',
    ],
    fotos: [magellan_1, magellan_2],
    informacoesTecnicas: {
      'Tipo': 'Scanner de checkout multi-face',
      'Leitura': '1D e 2D',
      'Interfaces': 'USB, RS-232, IBM',
      'Velocidade': 'Até 1.600 linhas/seg',
      'Profundidade de campo': 'Até 90 cm (1D)',
      'Temperatura de operação': '0°C a 40°C',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic Magellan 9300i. Podem me enviar mais informações e preços?',
  },

  rida: {
    slug: 'rida',
    nome: 'Datalogic RIDA',
    marca: 'Datalogic',
    categoria: 'leitores',
    descricao:
      'O Datalogic RIDA é um leitor fixo compacto de alto desempenho para automação industrial, controle de acesso e identificação em linhas de produção.',
    destaques: [
      'Leitor fixo industrial',
      'Leitura 1D e 2D',
      'Comunicação Ethernet e RS-232',
      'IP65 – uso industrial',
      'Alta velocidade de leitura',
    ],
    fotos: [rida_1],
    informacoesTecnicas: {
      'Tipo': 'Leitor fixo industrial',
      'Leitura': '1D e 2D',
      'Interfaces': 'Ethernet, RS-232',
      'Classificação IP': 'IP65',
      'Temperatura de operação': '-10°C a 50°C',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic RIDA. Podem me enviar mais informações e preços?',
  },

  qs2200: {
    slug: 'qs2200',
    nome: 'Honeywell QS2200',
    marca: 'Honeywell',
    categoria: 'leitores',
    descricao:
      'O Honeywell QS2200 é um leitor de bancada 2D de alta performance para PDV e ambiente de saúde, com leitura rápida de códigos em papel e tela.',
    destaques: [
      'Leitor 2D de alta velocidade',
      'Leitura de QR Code e DataMatrix',
      'Suporte hands-free integrado',
      'Compatível com mobile payment',
      'Plug & Play via USB',
    ],
    fotos: [qs2200_1],
    informacoesTecnicas: {
      'Tipo': 'Leitor de bancada',
      'Leitura': '1D e 2D',
      'Interface': 'USB',
      'Profundidade de campo': '0 – 35 cm',
      'Temperatura de operação': '0°C a 40°C',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Honeywell QS2200. Podem me enviar mais informações e preços?',
  },

  'lanehawk-lh5000': {
    slug: 'lanehawk-lh5000',
    nome: 'Datalogic LaneHawk LH5000',
    marca: 'Datalogic',
    categoria: 'leitores',
    descricao:
      'O Datalogic LaneHawk LH5000 é um sistema de câmera inteligente para detecção de itens esquecidos na esteira do checkout, reduzindo perdas no varejo.',
    destaques: [
      'Câmera inteligente para checkout',
      'Detecção de itens não escaneados',
      'Integração com sistemas de PDV',
      'Redução de perdas no varejo',
      'Fácil instalação e calibração',
    ],
    fotos: [lanehawk_1],
    informacoesTecnicas: {
      'Tipo': 'Sistema de câmera para checkout',
      'Resolução': 'Alta definição',
      'Interfaces': 'Ethernet, USB',
      'Temperatura de operação': '0°C a 40°C',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Datalogic LaneHawk LH5000. Podem me enviar mais informações e preços?',
  },

  // ── IMPRESSORAS ──────────────────────────────────────────────────────────

  zd400: {
    slug: 'zd400',
    nome: 'Zebra ZD400 Series',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZD400 é uma impressora de etiquetas de mesa compacta e versátil, com suporte a impressão térmica direta e transferência térmica. Ideal para logística, varejo e saúde.',
    destaques: [
      'Impressão térmica direta e transferência térmica',
      'Resolução de 203 ou 300 dpi',
      'USB, Serial, Ethernet e Wi-Fi (opcional)',
      'Link-OS para gerenciamento remoto',
      'Compatível com ZPL e EPL',
    ],
    fotos: [zd400_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta / Transferência térmica',
      'Resolução': '203 dpi (8 dot/mm) ou 300 dpi',
      'Velocidade máxima': 'Até 152 mm/seg',
      'Largura de impressão': 'Até 104 mm',
      'Interfaces': 'USB, Serial, Ethernet, Wi-Fi (opt.)',
      'Sistema operacional': 'Link-OS',
      'Linguagens': 'ZPL, EPL',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZD400. Podem me enviar mais informações e preços?',
  },

  zd220: {
    slug: 'zd220',
    nome: 'Zebra ZD220',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZD220 é uma impressora de etiquetas de entrada de linha, simples e confiável, perfeita para pequenas operações de logística e escritório que precisam de praticidade.',
    destaques: [
      'Impressão térmica direta',
      'Resolução 203 dpi',
      'Interface USB',
      'Plug & Play fácil configuração',
      'Design compacto',
    ],
    fotos: [zd220_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 dpi',
      'Velocidade máxima': 'Até 102 mm/seg',
      'Largura de impressão': 'Até 104 mm',
      'Interfaces': 'USB',
      'Linguagens': 'ZPL, EPL',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZD220. Podem me enviar mais informações e preços?',
  },

  zt510: {
    slug: 'zt510',
    nome: 'Zebra ZT510',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZT510 é uma impressora industrial de alto desempenho, projetada para operações 24/7 em armazéns, manufatura e logística. Construção metálica robusta.',
    destaques: [
      'Impressora industrial para uso contínuo',
      'Resolução de 203 ou 300 dpi',
      'Tela touchscreen colorida',
      'USB, Serial, Ethernet e Wi-Fi',
      'Sensor de etiquetas avançado',
    ],
    fotos: [zt510_1],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203 ou 300 dpi',
      'Velocidade máxima': 'Até 356 mm/seg',
      'Largura de impressão': 'Até 104 mm',
      'Interfaces': 'USB, Serial, Ethernet, Wi-Fi',
      'Linguagens': 'ZPL, EPL, XML',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZT510. Podem me enviar mais informações e preços?',
  },

  zt421: {
    slug: 'zt421',
    nome: 'Zebra ZT421',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZT421 é uma impressora industrial de grande formato para etiquetas largas, ideal para paletes, caixas e identificação de ativos em grandes operações logísticas.',
    destaques: [
      'Impressão de até 168 mm de largura',
      'Resolução de 203, 300 ou 600 dpi',
      'Construção full metal',
      'Tela touchscreen 4,3"',
      'RFID UHF opcional',
    ],
    fotos: [zt421_1],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203, 300 ou 600 dpi',
      'Velocidade máxima': 'Até 305 mm/seg',
      'Largura de impressão': 'Até 168 mm',
      'Interfaces': 'USB, Serial, Ethernet, Wi-Fi, Bluetooth',
      'RFID': 'UHF opcional',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZT421. Podem me enviar mais informações e preços?',
  },

  zt200: {
    slug: 'zt200',
    nome: 'Zebra ZT200 Series',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZT200 é uma impressora semi-industrial compacta para operações de médio volume. Equilíbrio entre desempenho e custo-benefício.',
    destaques: [
      'Semi-industrial para médio volume',
      'Resolução de 203 ou 300 dpi',
      'USB, Serial, Ethernet',
      'Display LCD para status',
      'Carcaça metálica resistente',
    ],
    fotos: [zt200_1],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203 ou 300 dpi',
      'Velocidade máxima': 'Até 203 mm/seg',
      'Largura de impressão': 'Até 104 mm',
      'Interfaces': 'USB, Serial, Ethernet',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZT200. Podem me enviar mais informações e preços?',
  },

  zq200: {
    slug: 'zq200',
    nome: 'Zebra ZQ200 Series',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZQ200 é uma impressora móvel compacta para impressão em campo, perfeita para entregadores, técnicos e equipes externas que precisam imprimir recibos e etiquetas.',
    destaques: [
      'Impressora mobile para campo',
      'Leve e resistente',
      'Bluetooth e Wi-Fi',
      'Bateria de longa duração',
      'IP42 – resistência a respingos',
    ],
    fotos: [zq200_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 dpi',
      'Velocidade máxima': 'Até 76 mm/seg',
      'Largura de impressão': 'Até 72 mm',
      'Interfaces': 'Bluetooth, Wi-Fi',
      'Bateria': 'Lítio íon recarregável',
      'Classificação IP': 'IP42',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZQ200. Podem me enviar mais informações e preços?',
  },

  zq310: {
    slug: 'zq310',
    nome: 'Zebra ZQ310',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZQ310 é uma impressora mobile outdoor resistente às intempéries, ideal para equipes externas que trabalham em ambientes ao ar livre, frio ou calor extremo.',
    destaques: [
      'Projetada para uso outdoor',
      'Resistente a temperatura extrema',
      'IP54 – proteção contra poeira e respingos',
      'Bluetooth e Wi-Fi',
      'Aprovada para uso em veículos',
    ],
    fotos: [zq310_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 dpi',
      'Velocidade máxima': 'Até 76 mm/seg',
      'Largura de impressão': 'Até 72 mm',
      'Interfaces': 'Bluetooth, Wi-Fi',
      'Temperatura de operação': '-20°C a 60°C',
      'Classificação IP': 'IP54',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZQ310. Podem me enviar mais informações e preços?',
  },

  zq600: {
    slug: 'zq600',
    nome: 'Zebra ZQ600 Series',
    marca: 'Zebra',
    categoria: 'impressoras',
    descricao:
      'A Zebra ZQ600 é a impressora mobile premium para campo, com alta capacidade de papel, tela touch e conectividade avançada para operações de alto volume.',
    destaques: [
      'Alta capacidade de papel (rolo de 3")',
      'Tela touchscreen',
      'Bluetooth 4.1 e Wi-Fi',
      'GPS integrado (ZQ630)',
      'IP54 – uso externo',
    ],
    fotos: [zq600_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 ou 300 dpi',
      'Velocidade máxima': 'Até 127 mm/seg',
      'Largura de impressão': 'Até 72 mm (3")',
      'Interfaces': 'Bluetooth 4.1, Wi-Fi, USB',
      'GPS': 'Integrado (ZQ630)',
      'Classificação IP': 'IP54',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Zebra ZQ600. Podem me enviar mais informações e preços?',
  },

  pd42: {
    slug: 'pd42',
    nome: 'Honeywell PD42',
    marca: 'Honeywell',
    categoria: 'impressoras',
    descricao:
      'A Honeywell PD42 é uma impressora de etiquetas industrial compacta e fácil de usar, ideal para pequenas e médias operações de logística e varejo com boa velocidade de impressão.',
    destaques: [
      'Impressora industrial compacta',
      'Resolução de 203 ou 300 dpi',
      'USB, Serial, Ethernet',
      'Painel LCD com teclas de ação rápida',
      'Velocidade de até 178 mm/seg',
    ],
    fotos: [pd42_1, pd42_2],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203 ou 300 dpi',
      'Velocidade máxima': 'Até 178 mm/seg',
      'Largura de impressão': 'Até 108 mm',
      'Interfaces': 'USB, Serial, Ethernet',
      'Linguagens': 'DPL, ZPL, IPL',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Honeywell PD42. Podem me enviar mais informações e preços?',
  },

  pd45: {
    slug: 'pd45',
    nome: 'Honeywell PD45',
    marca: 'Honeywell',
    categoria: 'impressoras',
    descricao:
      'A Honeywell PD45 é uma impressora de etiquetas industrial com tela touchscreen colorida e conectividade completa, projetada para operações de alto volume e demandas exigentes.',
    destaques: [
      'Tela touchscreen colorida 2,4"',
      'Resolução de 203 ou 300 dpi',
      'USB, Serial, Ethernet e Wi-Fi',
      'Suporte a RFID (opcional)',
      'Velocidade de até 254 mm/seg',
    ],
    fotos: [pd45_1],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203 ou 300 dpi',
      'Velocidade máxima': 'Até 254 mm/seg',
      'Largura de impressão': 'Até 108 mm',
      'Interfaces': 'USB, Serial, Ethernet, Wi-Fi',
      'RFID': 'UHF opcional',
    },
    whatsappMensagem: 'Olá! Tenho interesse na Honeywell PD45. Podem me enviar mais informações e preços?',
  },

  'tsc-ml': {
    slug: 'tsc-ml',
    nome: 'TSC ML Series',
    marca: 'TSC',
    categoria: 'impressoras',
    descricao:
      'A TSC ML é uma impressora de etiquetas de mesa econômica e confiável, ideal para pequenas operações de varejo, saúde e logística leve que buscam custo-benefício.',
    destaques: [
      'Excelente custo-benefício',
      'Resolução de 203 dpi',
      'Impressão térmica direta',
      'Interface USB padrão',
      'Design compacto para bancada',
    ],
    fotos: [tscml_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 dpi',
      'Velocidade máxima': 'Até 102 mm/seg',
      'Largura de impressão': 'Até 108 mm',
      'Interfaces': 'USB',
    },
    whatsappMensagem: 'Olá! Tenho interesse na TSC ML. Podem me enviar mais informações e preços?',
  },

  'tsc-mh': {
    slug: 'tsc-mh',
    nome: 'TSC MH Series',
    marca: 'TSC',
    categoria: 'impressoras',
    descricao:
      'A TSC MH é uma impressora industrial de alto desempenho com velocidade e precisão para operações de grande volume em manufatura, logística e distribuição.',
    destaques: [
      'Velocidade industrial de até 356 mm/seg',
      'Resolução de 203, 300 ou 600 dpi',
      'USB, Serial, Ethernet',
      'Carcaça metálica robusta',
      'Compatível com ZPL e EPL',
    ],
    fotos: [tscmh_1],
    informacoesTecnicas: {
      'Método de impressão': 'Transferência térmica / Térmica direta',
      'Resolução': '203, 300 ou 600 dpi',
      'Velocidade máxima': 'Até 356 mm/seg',
      'Largura de impressão': 'Até 108 mm',
      'Interfaces': 'USB, Serial, Ethernet',
    },
    whatsappMensagem: 'Olá! Tenho interesse na TSC MH. Podem me enviar mais informações e preços?',
  },

  'tsc-mb': {
    slug: 'tsc-mb',
    nome: 'TSC MB Series',
    marca: 'TSC',
    categoria: 'impressoras',
    descricao:
      'A TSC MB é uma impressora de etiquetas mobile Bluetooth compacta, ideal para equipes em campo que precisam imprimir etiquetas e recibos diretamente no local de trabalho.',
    destaques: [
      'Impressora mobile com Bluetooth',
      'Leve e portátil',
      'Bateria recarregável de longa duração',
      'Impressão térmica direta',
      'Ideal para equipes externas',
    ],
    fotos: [tscmb_1],
    informacoesTecnicas: {
      'Método de impressão': 'Térmica direta',
      'Resolução': '203 dpi',
      'Velocidade máxima': 'Até 76 mm/seg',
      'Largura de impressão': 'Até 72 mm',
      'Interfaces': 'Bluetooth, USB',
    },
    whatsappMensagem: 'Olá! Tenho interesse na TSC MB. Podem me enviar mais informações e preços?',
  },

  // ── ACCESS POINTS ────────────────────────────────────────────────────────

  'u6plus': {
    slug: 'u6plus',
    nome: 'Ubiquiti UniFi U6+',
    marca: 'Ubiquiti',
    categoria: 'access-points',
    descricao:
      'O Ubiquiti UniFi U6+ é um access point Wi-Fi 6 de alto desempenho, ideal para ambientes de alta densidade como armazéns, escritórios e centros de distribuição.',
    destaques: [
      'Wi-Fi 6 (802.11ax) dual band',
      'Até 3,0 Gbps de taxa de transferência',
      'Suporte a até 300 clientes simultâneos',
      'PoE 802.3af/at',
      'Gerenciamento via UniFi Controller',
    ],
    fotos: [u6plus_1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': 'Wi-Fi 6 (802.11ax)',
      'Bandas': 'Dual band (2,4 GHz + 5 GHz)',
      'Taxa máxima': '3,0 Gbps',
      'Clientes simultâneos': 'Até 300',
      'Alimentação': 'PoE 802.3af/at',
      'Porta Ethernet': 'Gigabit (1 Gbps)',
      'Montagem': 'Teto ou parede',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Ubiquiti UniFi U6+. Podem me enviar mais informações e preços?',
  },

  'u6-mesh': {
    slug: 'u6-mesh',
    nome: 'Ubiquiti UniFi U6 Mesh',
    marca: 'Ubiquiti',
    categoria: 'access-points',
    descricao:
      'O Ubiquiti U6 Mesh é um access point Wi-Fi 6 para uso externo e cobertura mesh, resistente a intempéries. Ideal para armazéns externos, pátios e áreas de carga.',
    destaques: [
      'Wi-Fi 6 (802.11ax)',
      'Uso interno e externo (IP65)',
      'Suporte mesh sem fio',
      'PoE ou fonte de energia separada',
      'Resistente a intempéries',
    ],
    fotos: [u6mesh_1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': 'Wi-Fi 6 (802.11ax)',
      'Bandas': 'Dual band (2,4 GHz + 5 GHz)',
      'Alimentação': 'PoE 802.3at / 24V Passive PoE',
      'Classificação IP': 'IP65',
      'Montagem': 'Poste, parede ou teto',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Ubiquiti U6 Mesh. Podem me enviar mais informações e preços?',
  },

  'uap-ac-m': {
    slug: 'uap-ac-m',
    nome: 'Ubiquiti UAP-AC-M',
    marca: 'Ubiquiti',
    categoria: 'access-points',
    descricao:
      'O Ubiquiti UAP-AC-M é um access point AC Mesh para ambientes externos, com suporte mesh e resistência IP65. Ótimo custo-benefício para cobertura Wi-Fi em áreas abertas.',
    destaques: [
      'Wi-Fi 5 (802.11ac) dual band',
      'Suporte mesh sem fio',
      'IP65 – uso externo',
      'PoE Passivo 24V',
      'Antenas de alta ganho',
    ],
    fotos: [uapm_1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': 'Wi-Fi 5 (802.11ac)',
      'Bandas': 'Dual band (2,4 GHz + 5 GHz)',
      'Taxa máxima': '750 Mbps',
      'Alimentação': '24V Passive PoE',
      'Classificação IP': 'IP65',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Ubiquiti UAP-AC-M. Podem me enviar mais informações e preços?',
  },

  'ap3000ax': {
    slug: 'ap3000ax',
    nome: 'AP3000AX',
    marca: 'Ubiquiti',
    categoria: 'access-points',
    descricao:
      'Access point Wi-Fi 6 de alta capacidade para ambientes corporativos e industriais, com excelente cobertura e suporte a múltiplos dispositivos simultâneos.',
    destaques: [
      'Wi-Fi 6 (802.11ax) tri band',
      'Alta capacidade para ambientes densos',
      'PoE 802.3at',
      'Gerenciamento centralizado',
      'Design para montagem em teto',
    ],
    fotos: [ap3000_1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': 'Wi-Fi 6 (802.11ax)',
      'Bandas': 'Tri band',
      'Alimentação': 'PoE 802.3at',
      'Montagem': 'Teto',
    },
    whatsappMensagem: 'Olá! Tenho interesse no AP3000AX. Podem me enviar mais informações e preços?',
  },

  'ap460c': {
    slug: 'ap460c',
    nome: 'AP460C',
    marca: 'Ubiquiti',
    categoria: 'access-points',
    descricao:
      'O AP460C é um access point compacto para montagem em teto, com boa cobertura e desempenho para escritórios e ambientes corporativos de médio porte.',
    destaques: [
      'Design compacto para teto',
      'Dual band Wi-Fi',
      'PoE padrão',
      'Fácil instalação',
      'Gerenciamento centralizado',
    ],
    fotos: [ap460c_1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': '802.11 a/b/g/n/ac',
      'Alimentação': 'PoE',
      'Montagem': 'Teto',
    },
    whatsappMensagem: 'Olá! Tenho interesse no AP460C. Podem me enviar mais informações e preços?',
  },

  ap5010: {
    slug: 'ap5010',
    nome: 'Unitech AP5010',
    marca: 'Unitech',
    categoria: 'access-points',
    descricao:
      'O Unitech AP5010 é um access point industrial robusto com certificação IP, projetado especificamente para ambientes de armazém com coletores de dados Wi-Fi, garantindo cobertura estável e sem interferência.',
    destaques: [
      'Projetado para uso com coletores industriais',
      'Dual band 802.11 a/b/g/n/ac',
      'Certificação industrial',
      'Alta compatibilidade com dispositivos de coleta',
      'PoE padrão',
    ],
    fotos: [ap5010_1, proap1],
    informacoesTecnicas: {
      'Padrão Wi-Fi': '802.11 a/b/g/n/ac',
      'Bandas': 'Dual band (2,4 GHz + 5 GHz)',
      'Alimentação': 'PoE 802.3af',
      'Montagem': 'Teto ou parede',
    },
    whatsappMensagem: 'Olá! Tenho interesse no Unitech AP5010. Podem me enviar mais informações e preços?',
  },

}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Retorna todos os produtos de uma categoria agrupados por marca */
export function getProdutosPorMarca(categoriaSlug) {
  const byMarca = {}
  for (const produto of Object.values(produtos)) {
    if (produto.categoria !== categoriaSlug) continue
    if (!byMarca[produto.marca]) byMarca[produto.marca] = []
    byMarca[produto.marca].push(produto)
  }
  return byMarca
}

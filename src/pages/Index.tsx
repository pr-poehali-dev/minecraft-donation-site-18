import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPrivilege, setSelectedPrivilege] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const privileges = [
    {
      id: 'vip',
      name: 'VIP',
      price: '199₽',
      color: 'green',
      icon: 'Gem',
      features: [
        'Приватный чат',
        'Уникальный префикс',
        'Доступ к /fly',
        '5 дополнительных домов',
        'Приоритет входа на сервер'
      ]
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: '499₽',
      color: 'pink',
      icon: 'Crown',
      features: [
        'Все привилегии VIP',
        'Креативный режим',
        'Доступ к /god',
        '15 дополнительных домов',
        'Возможность создать варп',
        'Кастомные частицы'
      ]
    },
    {
      id: 'legend',
      name: 'LEGEND',
      price: '999₽',
      color: 'purple',
      icon: 'Zap',
      features: [
        'Все привилегии PREMIUM',
        'Доступ ко всем мирам',
        'Неограниченные дома',
        'Создание своих команд',
        'Эксклюзивные предметы',
        'Персональная поддержка'
      ]
    },
    {
      id: 'antigrief',
      name: 'АНТИГРИФ',
      price: '2000₽',
      color: 'blue',
      icon: 'Shield',
      features: [
        'Все привилегии LEGEND',
        'Полная защита построек',
        'Откат гриферства',
        'Приватные регионы',
        'Защита от взрывов',
        'Автоматический бан гриферов',
        'VIP поддержка 24/7'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Как получить привилегию?',
      answer: 'Выберите нужную привилегию, нажмите кнопку "Купить" и следуйте инструкциям для оплаты. После успешной оплаты привилегия активируется автоматически на вашем аккаунте.'
    },
    {
      question: 'Сколько действует привилегия?',
      answer: 'Все привилегии выдаются навсегда и не требуют продления.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат возможен в течение 24 часов после покупки, если привилегия не использовалась.'
    },
    {
      question: 'Как активировать привилегию?',
      answer: 'После оплаты привилегия активируется автоматически. Просто зайдите на сервер с тем же никнеймом, который указали при покупке.'
    }
  ];

  const rules = [
    {
      title: 'Запрещено использовать читы',
      description: 'Любые модификации, дающие преимущество над другими игроками'
    },
    {
      title: 'Уважайте других игроков',
      description: 'Запрещены оскорбления, угрозы и неуважительное поведение'
    },
    {
      title: 'Не спамьте в чате',
      description: 'Избегайте повторяющихся сообщений и капса'
    },
    {
      title: 'Не ломайте постройки других игроков',
      description: 'Гриферство строго запрещено и карается баном'
    },
    {
      title: 'Не используйте баги',
      description: 'Об найденных багах сообщайте администрации'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-green">
                <Icon name="Box" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-wider">MINECRAFT</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('donate')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'donate' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Донат
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'faq' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('rules')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'rules' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Правила
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'support' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Помощь
              </button>
            </div>
            <Button className="bg-primary text-primary-foreground hover-glow-green">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-sm px-4 py-2 glow-green">
              🎮 Лучший Minecraft сервер 2024
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              ДОБРО ПОЖАЛОВАТЬ
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                НА СЕРВЕР
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйся к тысячам игроков! Уникальные режимы, дружелюбное комьюнити и постоянные обновления
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover-glow-green text-lg px-8"
                onClick={() => scrollToSection('donate')}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Купить привилегию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                <Icon name="Copy" size={20} className="mr-2" />
                IP: ru.TOPORTOP.com
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-primary/30 hover-glow-green transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary">2000+</div>
                <p className="text-sm text-muted-foreground">Игроков онлайн</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-secondary/30 hover-glow-pink transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Trophy" size={32} className="mx-auto mb-2 text-secondary" />
                <div className="text-3xl font-bold text-secondary">50+</div>
                <p className="text-sm text-muted-foreground">Уникальных режимов</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-accent/30 transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Shield" size={32} className="mx-auto mb-2 text-accent" />
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <p className="text-sm text-muted-foreground">Аптайм сервера</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/30 hover-glow-green transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Clock" size={32} className="mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Работаем всегда</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ПРИВИЛЕГИИ
            </h2>
            <p className="text-muted-foreground text-lg">
              Выбери свой уровень и получи эксклюзивные возможности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {privileges.map((privilege, index) => (
              <Card
                key={privilege.id}
                className={`relative overflow-hidden border-2 transition-all hover:scale-105 ${
                  privilege.color === 'green'
                    ? 'border-primary/50 hover-glow-green'
                    : privilege.color === 'pink'
                    ? 'border-secondary/50 hover-glow-pink'
                    : privilege.color === 'blue'
                    ? 'border-blue-500/50'
                    : 'border-accent/50'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      privilege.color === 'green'
                        ? 'bg-primary/20 glow-green'
                        : privilege.color === 'pink'
                        ? 'bg-secondary/20 glow-pink'
                        : privilege.color === 'blue'
                        ? 'bg-blue-500/20'
                        : 'bg-accent/20'
                    }`}
                  >
                    <Icon
                      name={privilege.icon as any}
                      size={32}
                      className={
                        privilege.color === 'green'
                          ? 'text-primary'
                          : privilege.color === 'pink'
                          ? 'text-secondary'
                          : privilege.color === 'blue'
                          ? 'text-blue-400'
                          : 'text-accent'
                      }
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-wider">
                    {privilege.name}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold mt-2">
                    <span
                      className={
                        privilege.color === 'green'
                          ? 'text-primary'
                          : privilege.color === 'pink'
                          ? 'text-secondary'
                          : privilege.color === 'blue'
                          ? 'text-blue-400'
                          : 'text-accent'
                      }
                    >
                      {privilege.price}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {privilege.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          size={20}
                          className={`mt-0.5 flex-shrink-0 ${
                            privilege.color === 'green'
                              ? 'text-primary'
                              : privilege.color === 'pink'
                              ? 'text-secondary'
                              : privilege.color === 'blue'
                              ? 'text-blue-400'
                              : 'text-accent'
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      setSelectedPrivilege(privilege);
                      setShowPaymentModal(true);
                    }}
                    className={`w-full ${
                      privilege.color === 'green'
                        ? 'bg-primary text-primary-foreground hover-glow-green'
                        : privilege.color === 'pink'
                        ? 'bg-secondary text-secondary-foreground hover-glow-pink'
                        : privilege.color === 'blue'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ВОПРОСЫ И ОТВЕТЫ
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на часто задаваемые вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/30 rounded-lg px-6 bg-card/50"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ПРАВИЛА СЕРВЕРА
            </h2>
            <p className="text-muted-foreground text-lg">
              Соблюдай правила для комфортной игры
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <Card key={index} className="border-primary/30 bg-card/50 hover-glow-green transition-all">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 glow-green">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{rule.title}</CardTitle>
                      <CardDescription>{rule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              НУЖНА ПОМОЩЬ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Свяжись с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="border-primary/30 bg-card/50 hover-glow-green transition-all cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold mb-1">Discord</p>
                <p className="text-sm text-muted-foreground">discord.gg/server</p>
              </CardContent>
            </Card>
            <Card className="border-secondary/30 bg-card/50 hover-glow-pink transition-all cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="Send" size={32} className="mx-auto mb-3 text-secondary" />
                <p className="font-semibold mb-1">Telegram</p>
                <p className="text-sm text-muted-foreground">@server_support</p>
              </CardContent>
            </Card>
            <Card className="border-accent/30 bg-card/50 transition-all cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground">support@server.ru</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/30 bg-card/50">
            <CardHeader>
              <CardTitle>Написать сообщение</CardTitle>
              <CardDescription>
                Мы ответим в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваш никнейм</label>
                <Input placeholder="Player123" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="player@example.com" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea
                  placeholder="Опишите вашу проблему или вопрос..."
                  className="bg-background min-h-32"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary text-primary-foreground hover-glow-green">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-green">
                <Icon name="Box" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">MINECRAFT SERVER</span>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 Minecraft Server. Все права защищены.
          </div>
        </div>
      </footer>

      {showPaymentModal && selectedPrivilege && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Покупка {selectedPrivilege.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPaymentModal(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </CardTitle>
              <CardDescription>
                Стоимость: {selectedPrivilege.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваш никнейм в игре</label>
                <Input
                  placeholder="Player123"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email для чека</label>
                <Input
                  type="email"
                  placeholder="player@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="CreditCard" size={16} className="text-primary" />
                  <span className="font-medium">Оплата переводом на карту</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  После нажатия кнопки вы получите реквизиты карты для оплаты
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowPaymentModal(false)}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                onClick={() => {
                  if (nickname && email) {
                    alert(`Переведите ${selectedPrivilege.price} на карту:\n\n💳 Номер карты: 2202 2063 7337 8237\n\n✉️ После оплаты отправьте скриншот чека на email: admin@toportop.com\n\nУкажите ваш ник: ${nickname}\n\nПривилегия будет выдана в течение 10 минут после проверки платежа.`);
                    setShowPaymentModal(false);
                    setNickname('');
                    setEmail('');
                  } else {
                    alert('Заполните все поля');
                  }
                }}
                className="flex-1 bg-primary text-primary-foreground hover-glow-green"
              >
                <Icon name="ArrowRight" size={18} className="mr-2" />
                Получить реквизиты
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
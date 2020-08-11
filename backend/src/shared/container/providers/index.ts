import { container } from 'tsyringe';

import IStorageProvider from './StoragePRovider/models/IStorageProvider';
import DiskStorageProvider from './StoragePRovider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailProvider>(
  'MailPRovider',
  EtherealMailProvider,
);
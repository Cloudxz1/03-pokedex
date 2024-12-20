import { Module } from '@nestjs/common';
import { AxiosAdapter } from 'src/seed/adapters/axios.adapter';

@Module({
    providers:[AxiosAdapter],
    exports:[AxiosAdapter]
})
export class CommonModule {}

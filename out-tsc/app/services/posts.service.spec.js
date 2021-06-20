import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
describe('PostsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=posts.service.spec.js.map
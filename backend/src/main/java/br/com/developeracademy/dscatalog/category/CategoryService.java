package br.com.developeracademy.dscatalog.category;

import br.com.developeracademy.dscatalog.exception.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;
    
    @Transactional( readOnly = true)
    public List<CategoryDTO> findAll(){
        List<Category> list = repository.findAll();
        List<CategoryDTO> listDTOs = list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
        return listDTOs;
    }

    @Transactional( readOnly = true)
    public CategoryDTO findById(Long id) {
        Optional<Category> obj = repository.findById(id);
        Category entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found!"));
        return new CategoryDTO(entity);
    }
}
